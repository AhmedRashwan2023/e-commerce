"use client";
import { HStack, Link, Text } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const SideLink = ({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href: string;
}) => {
  const Icon =
    icon === "CiSettings"
      ? CiSettings
      : icon === "FaShoppingCart"
      ? FaShoppingCart
      : icon === "MdLocationPin"
      ? MdLocationPin
      : icon === "FaRegBell"
      ? FaRegBell
      : FaShoppingBag;

  const pathname = usePathname();
  const localeActive = useLocale();
  return (
    <Link as={NextLink} href={`/${localeActive}/${href}`}>
      <HStack
        fontSize={15}
        fontWeight={pathname.includes(href) ? "semibold" : "inherit"}
        px={4}
        py={2}
        borderRadius={8}
        w={{ base: 180, lg: 250 }}
        h={"fit-content"}
        gap={3}
        backgroundColor={pathname.includes(href) ? "black" : "inherit"}
        color={pathname.includes(href) ? "white" : "inherit"}
        _hover={{ bg: pathname.includes(href) ? "black" : "#eeeeee" }}
      >
        <Text>
          <Icon />
        </Text>
        <Text>{text}</Text>
      </HStack>
    </Link>
  );
};

export default SideLink;
