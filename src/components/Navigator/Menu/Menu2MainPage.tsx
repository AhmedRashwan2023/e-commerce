"use client";
import { MenuLocationProps } from "@/data/types";
import { Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";

const Menu2MainPage = ({ menuLocation, closeDrawer }: MenuLocationProps) => {
  const t = useTranslations("menuMainPage");
  const localActive = useLocale();
  return (
    <Link
      as={NextLink}
      href={`/${localActive}`}
      w={menuLocation === "side" ? "100%" : "inherit"}
      onClick={() => {
        if (closeDrawer) closeDrawer();
      }}
    >
      {t("title")}
    </Link>
  );
};

export default Menu2MainPage;
