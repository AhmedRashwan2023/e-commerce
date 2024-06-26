"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { FaCartArrowDown } from "react-icons/fa6";
import CountBadge from "../../CountBadge";
import { IoMdClose } from "react-icons/io";
import CartViewer from "./CartViewer";
import { useCartContext } from "@/contexts/shoppingCart";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const localeActive = useLocale();
  const t = useTranslations("shoppingCart");
  const { cartItems } = useCartContext();

  return (
    <CountBadge count={cartItems.length}>
      <Box fontSize={23} onClick={onOpen} color={"#f1c232"} cursor={"pointer"}>
        <FaCartArrowDown />
      </Box>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        placement={"right"}
        size={{ base: "full", md: "md" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            dir={localeActive === "ar" ? "rtl" : "ltr"}
            color={"green"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{`${t("drawerTitle")}`}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <CartViewer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </CountBadge>
  );
};

export default CartDrawer;
