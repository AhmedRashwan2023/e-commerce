import { getSession } from "@/services/auth";
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import React from "react";

const AccountLayOut = async () => {
  const session = await getSession();
  const activeLocale = await getLocale();
  if (session !== null) redirect(`/${activeLocale}`);
  return null;
};

export default AccountLayOut;
