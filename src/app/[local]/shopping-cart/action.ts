"use server";

import { getSession } from "@/services/auth";
import { postRequest } from "@/utils/db";

export const executeCart = async (formData: FormData, cartItems: any) => {
  const session = await getSession();

  let itemsInCart: any[] = [];
  cartItems.forEach((item: { id: number; qty: number }) =>
    itemsInCart.push({ itemId: item?.id, itemQty: item?.qty })
  );

  const order = {
    orderItems: itemsInCart,
    addressId: formData.get("address"),
    paymentMethod: formData.get("payment"),
    userId: session?.data?.id,
  };
  const data = await postRequest(
    "/api/orders",
    order,
    session.data.access_token
  );

  return data;
};
