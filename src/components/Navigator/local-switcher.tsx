import { bodyPadding } from "@/assets/global";
import {
  Flex,
  HStack,
  Menu,
  MenuButton,
  Select,
  Text,
  Image,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { FaCaretDown } from "react-icons/fa";

const LocalSwitcher = () => {
  const t = useTranslations("LocalSwitcher");

  return (
    <Flex
      backgroundColor={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={"2px"}
      px={bodyPadding}
    >
      <Text color={"#5e6c75"} fontSize={15}>
        {t("title")}
      </Text>
      <LangMenu />
    </Flex>
  );
};

export default LocalSwitcher;

const LangMenu = () => {
  const t = useTranslations("LocalSwitcher");
  const localActive = useLocale();
  const router = useRouter();
  const pathame = usePathname();
  const menuButton = {
    flag:
      localActive === "ar" ? "/images/flags/ma.svg" : "/images/flags/fr.svg",
    text: localActive === "ar" ? t("arabic") : t("france"),
  };

  const menuItem = {
    flag:
      localActive === "ar" ? "/images/flags/fr.svg" : "/images/flags/ma.svg",
    text: localActive === "ar" ? t("france") : t("arabic"),
  };

  const handleSelectChange = () => {
    const remainingOFUrl = pathame.substring(3, pathame.length);
    router.replace(`/${localActive === "fr" ? "ar" : "fr"}/${remainingOFUrl}`);
  };

  return (
    <Menu isLazy>
      <MenuButton>
        <HStack>
          <Image alt="flag" src={menuButton.flag} boxSize={6} />
          <Text color={"#5e6c75"} fontSize={15}>
            {menuButton.text}
          </Text>
          <Icon as={FaCaretDown} color={"#5e6c75"} />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleSelectChange}>
          <HStack px={2}>
            <Image alt="flag" src={menuItem.flag} boxSize={6} />
            <Text color={"#5e6c75"}>{menuItem.text}</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
