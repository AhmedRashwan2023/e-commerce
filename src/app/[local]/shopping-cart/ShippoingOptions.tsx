"use client";
import { useCartContext } from "@/contexts/shoppingCart";
import { ReactNode } from "react";
import { executeCart } from "./action";

const ShippoingOptions = ({ children }: { children: ReactNode }) => {
  const { cartItems } = useCartContext();

  const handleCart = async (formData: FormData) => {
    await executeCart(formData, cartItems);
  };

  return cartItems.length > 0 && <form action={handleCart}>{children}</form>;
};

export default ShippoingOptions;
