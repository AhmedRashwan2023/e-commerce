import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Menu5Help = () => {
  const t = useTranslations("menuHelp");
  return <Link href={"/"}>{t("title")}</Link>;
};

export default Menu5Help;
