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
import { MenuLocationProps } from "@/data/types";
import { useState } from "react";

const Menu3MoreCategories = ({
  menuLocation,
  closeDrawer,
}: MenuLocationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuMoreCategories");
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <Popover isOpen={isOpen}>
        <PopoverTrigger>
          <Box
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
      {showLinks && <Menu3MoreCategoriesDetails closeDrawer={closeDrawer} />}
    </>
  );
};

export default Menu3MoreCategories;
