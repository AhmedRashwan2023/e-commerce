"use client";
import { Alert, AlertIcon, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CartItem, { CartItemProps } from "./CartItem";
import { useCartContext } from "@/contexts/shoppingCart";
import { useLocale, useTranslations } from "next-intl";
import ExecuteCartForm from "./ExecuteCartForm";
import NextLink from "next/link";

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
              as={NextLink}
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
          <CartItem key={index} item={item} />
        ))}
      {cartItems.length > 0 && <ExecuteCartForm />}
    </Stack>
  );
};

export default CartViewer;
