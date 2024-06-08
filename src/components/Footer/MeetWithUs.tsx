import { Flex, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
// import Link from "next/link";
import React from "react";

const MeetWithUs = () => {
  const t = useTranslations("MeetWithUs");

  const linkColor = "#C0C3CA";
  const hoverColor = "#d6c94b";
  return (
    <Flex flexDir={"column"} alignSelf={"flex-start"} gap={3}>
      <Text fontWeight={"bold"}>{t("title")}</Text>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("about")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("blog")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("helpCenter")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("ourValue")}
      </Link>
    </Flex>
  );
};

export default MeetWithUs;
