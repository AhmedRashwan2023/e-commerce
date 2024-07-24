"use server";

import { signIn } from "@/services/auth";
import { postRequest } from "@/utils/db";

export const handleSignIn = async (formData: FormData) => {
  const data = await signIn(formData);
  return data;
};

export const handleSignUp = async (formData: FormData) => {
  const frmData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };
  const data = await postRequest("/api/clients", frmData);
  return data;
};
