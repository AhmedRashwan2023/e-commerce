"use server";

import { getSession } from "@/services/auth";
import { postRequest } from "@/utils/db";

export const handleAddAddress = async (formData: FormData) => {
  const session = await getSession();
  const dataItem = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    firstAddress: formData.get("firstAddress"),
    secondAddress: formData.get("secondAddress"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    postNum: formData.get("postNum"),
    work: formData.get("work"),
    clientId: session.data.id,
  };
  const data = await postRequest("/api/addresses/insert",dataItem, session.data.access_token)
  return data;
};

export const handleUpdateAddress = async (formData: FormData, id: number) => {
  const session = await getSession();

  const dataItem = {
    clientId: session.data.id,
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    firstAddress: formData.get("firstAddress"),
    secondAddress: formData.get("secondAddress"),
    city: formData.get("city"),
    phone: formData.get("phone"),
    postNum: formData.get("postNum"),
    work: formData.get("work"),
  };
  const data = await postRequest(`/api/addresses/${id}`,dataItem, session.data.access_token)
  return data;
};

export const handleDeleteAddress = async(id:number)=>{
  const session = await getSession();
  const data = await postRequest(`/api/addresses/delete/${id}`,{}, session.data.access_token)
  return data;
}