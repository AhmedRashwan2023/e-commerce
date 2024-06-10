import { Flex, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import React from "react";

const ForCustomers = () => {
  const t = useTranslations("forCustomers");
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
        {t("Payments")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("Shipping")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("productReturns")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("faq")}
      </Link>
      <Link
        as={NextLink}
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("paymentAtCheckout")}
      </Link>
    </Flex>
  );
};

export default ForCustomers;
