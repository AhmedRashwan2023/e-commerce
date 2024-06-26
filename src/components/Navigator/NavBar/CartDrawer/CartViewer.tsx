"use client";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import React from "react";
import CartItem, { CartItemProps } from "./CartItem";
import { useCartContext } from "@/contexts/shoppingCart";
import { useLocale, useTranslations } from "next-intl";
import ExecuteCartForm from "./ExecuteCartForm";

const CartViewer = () => {
  const { cartItems } = useCartContext();
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();
  const direction = localeActive === "ar" ? "rtl" : "ltr";

  return (
    <Stack dir={direction}>
      {cartItems.length === 0 && (
        <Alert status="warning" borderRadius={6}>
          <AlertIcon />
          {t("emptyCart")}
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
