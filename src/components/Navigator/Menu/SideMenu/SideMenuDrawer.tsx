"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const SideMenuDrawer = () => {
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideMenuDrawer;
