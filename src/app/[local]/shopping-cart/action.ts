"use server";

import { getSession } from "@/services/auth";

export const executeCart = async (formData: FormData, cartItems: any) => {
  const session = await getSession();
  const order = {
    items: cartItems,
    addressId: formData.get("address"),
    payment: formData.get("payment"),
    user_id: session?.data?.id,
  };
  console.log(order);
};
