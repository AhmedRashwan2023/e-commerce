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
import { useLocale } from "next-intl";
import { FaCartArrowDown } from "react-icons/fa6";
import CountBadge from "../CountBadge";
import { IoMdClose } from "react-icons/io";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const localeActive = useLocale();

  return (
    <CountBadge count={2}>
      <Box fontSize={23} onClick={onOpen} color={"#f1c232"} cursor={"pointer"}>
        <FaCartArrowDown />
      </Box>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        placement={"right"}
        size={{ base: "full", md: "sm" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{`Cart`}</Text>
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
    </CountBadge>
  );
};

export default CartDrawer;
