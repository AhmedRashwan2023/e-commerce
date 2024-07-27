"use client";
import { Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { MenuLocationProps } from "@/data/types";

const Menu5Help = ({ menuLocation, closeDrawer }: MenuLocationProps) => {
  const t = useTranslations("menuHelp");
  const localeActive = useLocale();
  return (
    <Link
      // as={NextLink}
      href={`/${localeActive}/centre-assistance`}
      w={menuLocation === "side" ? "100%" : "inherit"}
      onClick={() => {
        if (closeDrawer) closeDrawer();
      }}
    >
      {t("title")}
    </Link>
  );
};

export default Menu5Help;
