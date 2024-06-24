"use client";
import {
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import Menu3MoreCategoriesDetails from "./Menu3MoreCategoriesDetails";
import { useTranslations } from "next-intl";

const Menu3MoreCategories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuMoreCategories");
  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
          <HStack>
            <Text cursor={"pointer"}>{t("title")}</Text>
            <FaCaretDown />
          </HStack>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        color="black"
        borderColor={"whitesmoke"}
        w={"fit-content"}
      >
        <PopoverBody>
          <Menu3MoreCategoriesDetails />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Menu3MoreCategories;
