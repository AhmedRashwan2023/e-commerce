"use server";

import { signOut } from "@/services/auth";
import { redirect } from "next/navigation";

export const handleSignOut = async (activeLocale: string) => {
  await signOut();
  redirect(`/${activeLocale}`);
};
