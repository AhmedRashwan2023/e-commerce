import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Menu2MainPage = () => {
  const t = useTranslations("menuMainPage");
  const localActive = useLocale();
  return <Link href={`/${localActive}`}>{t("title")}</Link>;
};

export default Menu2MainPage;
