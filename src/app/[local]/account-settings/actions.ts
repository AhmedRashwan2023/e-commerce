"use server";

import { getSession } from "@/services/auth";
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
