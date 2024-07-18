"use server";

import { getSession, signOut } from "@/services/auth";
import { postRequest } from "@/utils/db";

export const handleChangePassword = async (formData: FormData) => {
  const session = await getSession();
  const body = {
    username: session.data.name,
    password: formData.get("newPass"),
  };

  const data = await postRequest("/api/clients/reset", body);
  return data;
};

export const handleUpdateData = async (formData: FormData) => {
  const session = await getSession();

  const body = {
    id: session.data.id,
    username: formData.get("username"),
    email: formData.get("email"),
    // password: formData.get("password"),
    phone: formData.get("phone"),
  };

  const data = await postRequest("/api/clients/edit", body);
  return data;
};

export const handleDeleteAccount = async () => {
  const session = await getSession();
  const data = await postRequest(
    `/api/clients/delete/${session.data.id}`,
    {},
    session.data.access_token
  );
  if (!data?.error) {
    await signOut();
  }
  return data;
};
