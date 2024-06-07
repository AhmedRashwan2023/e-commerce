import {
  Box,
  HStack,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Text,
  PopoverContent,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Menu4NestedMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("menuAccount");
  const localActive = useLocale();

  const ArrowIcon = localActive === "ar" ? IoIosArrowBack : IoIosArrowForward;
  const placement = localActive === "ar" ? "left" : "right";

  return (
    <Popover isOpen={isOpen} placement={placement}>
      <PopoverTrigger>
        <Box onMouseEnter={onOpen} onMouseLeave={onClose} w={"100%"}>
          <HStack justifyContent={"space-between"}>
            <Text>{t("title")}</Text>
            <ArrowIcon />
          </HStack>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={"fit-content"}
        borderColor={"whitesmoke"}
      >
        <PopoverBody>
          <Flex flexDir={"column"}>
            <LinkItem href={"#"} onClick={onClose}>
              {t("menu4Item4Nested1")}
            </LinkItem>
            <LinkItem href={"#"} onClick={onClose}>
              {t("menu4Item4Nested2")}
            </LinkItem>
            <LinkItem href={"#"} onClick={onClose}>
              {t("menu4Item4Nested3")}
            </LinkItem>
            <LinkItem href={"#"} onClick={onClose}>
              {t("menu4Item4Nested4")}
            </LinkItem>
            <LinkItem href={"#"} onClick={onClose}>
              {t("menu4Item4Nested5")}
            </LinkItem>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Menu4NestedMenu;

const LinkItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <Box _hover={{ bg: "#EDF2F7" }} p={2}>
        {children}
      </Box>
    </Link>
  );
};
