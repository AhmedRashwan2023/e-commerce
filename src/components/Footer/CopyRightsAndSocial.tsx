import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";
import NextLink from "next/link";

const CopyRightsAndSocial = () => {
  const linkColor = "#d6c94b";
  const t = useTranslations("CopyRightsAndSocial");

  return (
    <Flex justifyContent={"space-between"} pt={6} flexWrap={"wrap"}>
      <HStack fontWeight={"bold"}>
        <Text>
          {t("copyrights")} {new Date().getFullYear()}
        </Text>
        <LiaCopyrightSolid />
        <Link
          // as={NextLink}
          color={linkColor}
          target="_blank"
          href="https://www.optimgov.com/"
        >
          OptimGov
        </Link>
        <Link
          // as={NextLink}
          color={linkColor}
          target="_blank"
          href="https://codescandy.com/"
        >
          DGAPR
        </Link>
      </HStack>
      <HStack>
        <Text>{t("followUs")}</Text>
        <Link
          // as={NextLink}
          href="#"
          _hover={{ color: linkColor }}
          fontSize={20}
        >
          <FaFacebook />
        </Link>
        <Link
          // as={NextLink}
          href="#"
          _hover={{ color: linkColor }}
          fontSize={20}
        >
          <FaXTwitter />
        </Link>
        <Link
          // as={NextLink}
          href="#"
          _hover={{ color: linkColor }}
          fontSize={20}
        >
          <FaInstagram />
        </Link>
      </HStack>
    </Flex>
  );
};

export default CopyRightsAndSocial;
