import { Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";

const Menu2MainPage = () => {
  const t = useTranslations("menuMainPage");
  const localActive = useLocale();
  return (
    <Link as={NextLink} href={`/${localActive}`}>
      {t("title")}
    </Link>
  );
};

export default Menu2MainPage;
