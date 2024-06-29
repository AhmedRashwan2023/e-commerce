"use server";

export const executeCart = async (formData: FormData, cartItems: any) => {
  const order = {
    ...cartItems,
    addressId: formData.get("address"),
    payment: formData.get("payment"),
  };
  console.log(order);
};
