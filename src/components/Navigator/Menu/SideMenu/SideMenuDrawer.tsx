"use client";

import { Category } from "@/data/types";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Menu from "..";
import SearchInput from "../../NavBar/SearchInput";

const SideMenuDrawer = ({
  session,
  categories,
}: {
  session: any;
  categories: Category[];
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("Index");
  const localeActive = useLocale();
  return (
    <>
      <Box
        fontSize={25}
        onClick={onOpen}
        color={"#f1c232"}
        cursor={"pointer"}
        transform={
          localeActive === "ar" ? "translateX(10px)" : "translateX(-10px)"
        }
      >
        <AiOutlineMenuFold />
      </Box>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        placement={"left"}
        size={{ base: "full", md: "sm" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            color={"green"}
            dir={localeActive === "ar" ? "rtl" : "ltr"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t("title")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Stack gap={4} dir={localeActive === "ar" ? "rtl" : "ltr"}>
              <SearchInput menuLocation={"side"} />
              <Menu
                session={session}
                menuLocation={"side"}
                closeDrawer={onClose}
                categories={categories}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideMenuDrawer;
