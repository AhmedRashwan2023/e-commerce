"use client";
import {
  HStack,
  Menu,
  MenuButton,
  useDisclosure,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Menu4NestedMenu from "./Menu4NestedMenu";

const Menu4Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuAccount");

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
          <Link href={"/shopping-items"} onClick={onClose}>
            <MenuItem>{t("menu4Item1")}</MenuItem>
          </Link>
          <Link href={"/shopping-items"} onClick={onClose}>
            <MenuItem>{t("menu4Item2")}</MenuItem>
          </Link>
          <Link href={"/shopping-items"} onClick={onClose}>
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
