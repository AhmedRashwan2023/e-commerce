"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const MyAccount = () => {
  const router = useRouter();
  const localeActive = useLocale();
  React.useEffect(() => {
    router.push(`/${localeActive}/my-account/my-orders`);
  }, []);
};

export default MyAccount;
