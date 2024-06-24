import { Flex, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";

const MeetWithUs = () => {
  const t = useTranslations("MeetWithUs");

  const linkColor = "#C0C3CA";
  const hoverColor = "#d6c94b";
  return (
    <Flex flexDir={"column"} alignSelf={"flex-start"} gap={3}>
      <Text fontWeight={"bold"}>{t("title")}</Text>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("about")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("blog")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("helpCenter")}
      </Link>
      <Link
        as={NextLink}
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
