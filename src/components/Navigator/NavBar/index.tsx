import React from "react";
import Navigarot from "..";
import { Box, HStack, Link, Image, Show } from "@chakra-ui/react";
import { bodyPadding } from "@/assets/global";
import SearchInput from "./search-input";
import Menu from "../Menu";
import NextLink from "next/link";
import { useLocale } from "next-intl";

export interface NavBarProps {
  session: any;
}
const NavBar: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();
  return (
    <Navigarot>
      <Box backgroundColor={"#01114d"} px={bodyPadding}>
        <HStack gap={16} py={5}>
          <Link as={NextLink} href={`/${localeActive}`}>
            <HStack minW={100} w={100}>
              <Image alt="logo" src={"/images/header/RM.png"} boxSize={50} />
              <Image alt="logo" src={"/images/header/dgapr.png"} boxSize={50} />
            </HStack>
          </Link>
          <Show above="lg">
            <SearchInput />
          </Show>
        </HStack>
        <Show above="lg">
          <Menu session={session} />
        </Show>
      </Box>
    </Navigarot>
  );
};

export default NavBar;
