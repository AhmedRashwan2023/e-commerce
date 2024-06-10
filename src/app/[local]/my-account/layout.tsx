"use client";
import { bodyPadding } from "@/assets/global";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { CiSettings } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const MyAccountLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("myAccount");
  const activeLocale = useLocale();
  const router = useRouter();

  const handleSignOut = () => {
    router.push(`/${activeLocale}/`);
  };

  return (
    <Flex px={bodyPadding} gap={10}>
      <Stack py={"3rem"}>
        <SideLinks href="my-orders" text={t("myOrders")} icon={FaShoppingBag} />
        <SideLinks
          href="account-settings"
          text={t("settings")}
          icon={CiSettings}
        />
        <SideLinks
          href="my-addresses"
          text={t("address")}
          icon={MdLocationPin}
        />
        <SideLinks
          href="notification-settings"
          text={t("notifications")}
          icon={FaRegBell}
        />
        <Divider my={3} />
        <Link onClick={handleSignOut}>
          <HStack
            fontSize={15}
            px={4}
            py={2}
            borderRadius={8}
            w={250}
            h={"fit-content"}
            gap={3}
            _hover={{ bg: "#eeeeee" }}
          >
            <Text>
              <MdLogout />
            </Text>
            <Text>{t("signOut")}</Text>
          </HStack>
        </Link>
      </Stack>
      <Box w={"1px"} backgroundColor={"#eef1f6"}></Box>
      <Box py={"3rem"}>{children}</Box>
    </Flex>
  );
};

export default MyAccountLayout;

const SideLinks = ({
  icon,
  text,
  href,
}: {
  icon: IconType;
  text: string;
  href: string;
}) => {
  const Icon = icon;
  const pathname = usePathname();
  const localeActive = useLocale();
  return (
    <Link as={NextLink} href={`/${localeActive}/my-account/${href}`}>
      <HStack
        fontSize={15}
        fontWeight={pathname.includes(href) ? "semibold" : "inherit"}
        px={4}
        py={2}
        borderRadius={8}
        w={250}
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
