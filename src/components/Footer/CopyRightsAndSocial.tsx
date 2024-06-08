import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";

const CopyRightsAndSocial = () => {
  const linkColor = "#d6c94b";
  const t = useTranslations("CopyRightsAndSocial");
  return (
    <Flex justifyContent={"space-between"} pt={6}>
      <HStack fontWeight={"bold"}>
        <Text>
          {t("copyrights")} {new Date().getFullYear()}
        </Text>
        <LiaCopyrightSolid />
        <Link
          color={linkColor}
          target="_blank"
          href="https://www.optimgov.com/"
        >
          OptimGov
        </Link>
        <Link color={linkColor} target="_blank" href="https://codescandy.com/">
          DGAPR
        </Link>
      </HStack>
      <HStack>
        <Text>{t("followUs")}</Text>
        <Link href="#" _hover={{ color: linkColor }} fontSize={20}>
          <FaFacebook />
        </Link>
        <Link href="#" _hover={{ color: linkColor }} fontSize={20}>
          <FaXTwitter />
        </Link>
        <Link href="#" _hover={{ color: linkColor }} fontSize={20}>
          <FaInstagram />
        </Link>
      </HStack>
    </Flex>
  );
};

export default CopyRightsAndSocial;
