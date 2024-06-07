"use client";
import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TbCategory } from "react-icons/tb";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Menu1Categores = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuCategores");
  const localActive = useLocale();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          px={6}
          py={3}
          transition="all 0.2s"
          borderRadius="md"
          color={"#09104c"}
          backgroundColor={"#eac102"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <HStack>
            <TbCategory />
            <Text fontWeight={"bolder"}>{t("title")}</Text>
          </HStack>
        </MenuButton>
        <MenuList color={"black"} onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item1")}</MenuItem>
          </Link>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item2")}</MenuItem>
          </Link>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item3")}</MenuItem>
          </Link>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item4")}</MenuItem>
          </Link>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item5")}</MenuItem>
          </Link>
          <Link href={`/${localActive}/shopping-items`} onClick={onClose}>
            <MenuItem>{t("menu1Item6")}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default Menu1Categores;
