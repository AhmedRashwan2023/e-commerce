"use client";
import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Link,
  Box,
  Stack,
} from "@chakra-ui/react";
import { TbCategory } from "react-icons/tb";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Menu1CategoresProps } from "@/data/types";

const Menu1Categores: React.FC<Menu1CategoresProps> = ({
  menuLocation,
  closeDrawer,
  categories,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuCategores");
  const t2 = useTranslations("shoppingItems");
  const localActive = useLocale();
  const [showLinks, setShowLinks] = useState(false);
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
          onMouseEnter={() => {
            if (!menuLocation) onOpen();
          }}
          onMouseLeave={onClose}
          onClick={() => {
            if (menuLocation) setShowLinks(!showLinks);
          }}
          w={menuLocation === "side" ? "100%" : "inherit"}
        >
          <HStack justifyContent={"center"}>
            <TbCategory />
            <Text fontWeight={"bolder"}>{t("title")}</Text>
          </HStack>
        </MenuButton>
        <MenuList
          color={"black"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          zIndex={1000}
        >
          <Link
            as={NextLink}
            href={`/${localActive}/shopping-items?catId=all`}
            onClick={onClose}
          >
            <MenuItem>
              {/* {localActive === "fr" ? category.fr : category.ar} */}
              {t2("allCategories")}
            </MenuItem>
          </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              as={NextLink}
              href={`/${localActive}/shopping-items?catId=${category.id}`}
              onClick={onClose}
            >
              <MenuItem>
                {/* {localActive === "fr" ? category.fr : category.ar} */}
                {category.name}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
      {showLinks && (
        <Stack
          px={3}
          py={2}
          color={"#000000"}
          w={"100%"}
          borderRadius={8}
          borderWidth={1}
          borderColor={"#bcbcbc"}
        >
          {categories.map((category, index) => (
            <Link
              py={1}
              px={2}
              borderRadius={5}
              key={index}
              as={NextLink}
              href={`/${localActive}/shopping-items?catId=${category.id}`}
              onClick={() => {
                if (closeDrawer) closeDrawer();
              }}
              _hover={{ bg: "#eeeeee" }}
            >
              {/* {localActive === "fr" ? category.fr : category.ar} */}
              {category.name}
            </Link>
          ))}
        </Stack>
      )}
    </>
  );
};

export default Menu1Categores;
