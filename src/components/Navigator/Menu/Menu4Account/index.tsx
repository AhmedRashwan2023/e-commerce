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
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Menu4NestedMenu from "./Menu4NestedMenu";

const Menu4Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuAccount");
  const activeLocale = useLocale();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          transition="all 0.2s"
          borderRadius="md"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <HStack>
            <Text>{t("title")}</Text>
            <FaCaretDown />
          </HStack>
        </MenuButton>
        <MenuList color={"black"} onMouseEnter={onOpen} onMouseLeave={onClose}>
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
          <MenuItem>
            <Menu4NestedMenu />
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Menu4Account;
