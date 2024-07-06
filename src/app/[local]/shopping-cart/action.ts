"use server";

import { getSession } from "@/services/auth";

export const executeCart = async (formData: FormData, cartItems: any) => {
  const session = await getSession();

  let itemsInCart: any[] = [];
  cartItems.forEach((item: { id: number; qty: number }) =>
    itemsInCart.push({ item_id: item?.id, item_qty: item?.qty })
  );

  const order = {
    items: itemsInCart,
    addressId: formData.get("address"),
    payment: formData.get("payment"),
    user_id: session?.data?.id,
  };
  console.log(order);
};
