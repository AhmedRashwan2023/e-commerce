import { getSession } from "@/services/auth";
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AccountLayOut = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();
  const activeLocale = await getLocale();
  if (session !== null) redirect(`/${activeLocale}`);
  return children;
};

export default AccountLayOut;
