"use client";
import {
  HStack,
  Menu,
  MenuButton,
  useDisclosure,
  Text,
  MenuList,
  MenuItem,
  Link,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { FaCaretDown } from "react-icons/fa";
import Menu4NestedMenu from "./Menu4NestedMenu";
import { NavBarProps } from "../../NavBar";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { handleSignOut } from "./action";

const Menu4Account: React.FC<NavBarProps> = ({
  session,
  menuLocation,
  closeDrawer,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuAccount");
  const tMyAccount = useTranslations("myAccount");

  const activeLocale = useLocale();
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          transition="all 0.2s"
          borderRadius="md"
          onMouseEnter={() => {
            if (!menuLocation) onOpen();
          }}
          onMouseLeave={onClose}
          w={menuLocation === "side" ? "100%" : "inherit"}
          onClick={() => {
            if (menuLocation) setShowLinks(!showLinks);
          }}
        >
          <HStack justifyContent={"space-between"}>
            <Text>{t("title")}</Text>
            <FaCaretDown />
          </HStack>
        </MenuButton>
        <MenuList
          color={"black"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          zIndex={1000}
        >
          {!session && (
            <>
              <Link
                as={NextLink}
                href={`/${activeLocale}/account/signin`}
                onClick={onClose}
              >
                <MenuItem>{t("menu4Item1")}</MenuItem>
              </Link>
              <Link
                as={NextLink}
                href={`/${activeLocale}/account/signup`}
                onClick={onClose}
              >
                <MenuItem>{t("menu4Item2")}</MenuItem>
              </Link>
              <Link
                as={NextLink}
                href={`/${activeLocale}/account/reset-password`}
                onClick={onClose}
              >
                <MenuItem>{t("menu4Item3")}</MenuItem>
              </Link>
            </>
          )}
          {session && (
            <MenuItem>
              <Menu4NestedMenu />
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      {showLinks && !session && (
        <Stack
          px={3}
          py={2}
          color={"#000000"}
          w={"100%"}
          borderRadius={8}
          borderWidth={1}
          borderColor={"#bcbcbc"}
        >
          <Link
            as={NextLink}
            href={`/${activeLocale}/account/signin`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item1")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/account/signup`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item2")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/account/reset-password`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item3")}
          </Link>
        </Stack>
      )}
      {showLinks && session && (
        <Stack
          px={3}
          py={2}
          color={"#000000"}
          w={"100%"}
          borderRadius={8}
          borderWidth={1}
          borderColor={"#bcbcbc"}
        >
          <Link
            as={NextLink}
            href={`/${activeLocale}/shopping-cart`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("shoppingCart")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/orders`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item4Nested1")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/account-settings`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item4Nested2")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/my-addresses`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item4Nested3")}
          </Link>
          <Link
            as={NextLink}
            href={`/${activeLocale}/notification-settings`}
            onClick={() => {
              if (closeDrawer) closeDrawer();
            }}
            py={1}
            px={2}
            borderRadius={5}
            _hover={{ bg: "#eeeeee" }}
          >
            {t("menu4Item4Nested5")}
          </Link>
          <Divider my={3} />
          <form
            action={() => {
              handleSignOut(activeLocale);
              if (closeDrawer) closeDrawer();
            }}
          >
            <button type="submit" style={{ width: "100%" }}>
              <HStack
                fontSize={15}
                px={4}
                py={2}
                borderRadius={8}
                w={"100%"}
                h={"fit-content"}
                gap={3}
                _hover={{ bg: "#eeeeee" }}
              >
                <Text>
                  <MdLogout />
                </Text>
                <Text>{tMyAccount("signOut")}</Text>
              </HStack>
            </button>
          </form>
        </Stack>
      )}
    </>
  );
};

export default Menu4Account;
