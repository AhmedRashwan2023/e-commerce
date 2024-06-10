import { Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import React from "react";

const Menu5Help = () => {
  const t = useTranslations("menuHelp");
  const localeActive = useLocale();
  return (
    <Link as={NextLink} href={`/${localeActive}/centre-assistance`}>
      {t("title")}
    </Link>
  );
};

export default Menu5Help;
