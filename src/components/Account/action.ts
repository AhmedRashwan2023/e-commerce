"use server";

import { signIn } from "@/services/auth";

export const handleSignIn = async (formData: FormData) => {
  const data = await signIn(formData);
  return data;
};
