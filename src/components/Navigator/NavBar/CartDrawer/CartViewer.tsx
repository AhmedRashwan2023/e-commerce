"use client";
import { Alert, AlertIcon, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";
import { useCartContext } from "@/contexts/shoppingCart";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { CartItemProps } from "@/data/types";

const CartViewer = ({ onClose }: { onClose?: () => void }) => {
  const { cartItems } = useCartContext();
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();
  const direction = localeActive === "ar" ? "rtl" : "ltr";

  return (
    <Stack dir={direction}>
      {cartItems.length === 0 && (
        <Alert status="warning" borderRadius={6}>
          <AlertIcon />
          <Text>
            {t("emptyCartText")}&nbsp;
            <Link
              // as={NextLink}
              href={`/${localeActive}/shopping-items`}
              textDecoration={"underline !important"}
              onClick={() => {
                if (onClose) onClose();
              }}
            >
              {t("emptyCartLink")}
            </Link>
          </Text>
        </Alert>
      )}
      {cartItems &&
        cartItems.map((item: CartItemProps, index: number) => (
          <CartItem key={index} item={item} onClose={onClose} />
        ))}
    </Stack>
  );
};

export default CartViewer;
