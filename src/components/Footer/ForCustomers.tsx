import { Flex, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

const ForCustomers = () => {
  const t = useTranslations("forCustomers");
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
        {t("Payments")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("Shipping")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("productReturns")}
      </Link>
      <Link
        href="#"
        _hover={{ color: hoverColor }}
        color={linkColor}
        textDecor={"none"}
      >
        {t("faq")}
      </Link>
      <Link
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
