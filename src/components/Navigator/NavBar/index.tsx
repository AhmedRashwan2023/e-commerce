import React from "react";
import Navigarot from "..";
import { Box, HStack, Link, Image } from "@chakra-ui/react";
import { bodyPadding } from "@/assets/global";
import SearchInput from "./search-input";
import Menu from "../Menu";

const NavBar = () => {
  return (
    <Navigarot>
      <Box backgroundColor={"#01114d"} px={bodyPadding}>
        <HStack gap={16} py={5}>
          <Link href={"/"}>
            <HStack minW={100} w={100}>
              <Image alt="logo" src={"/images/header/RM.png"} boxSize={50} />
              <Image alt="logo" src={"/images/header/dgapr.png"} boxSize={50} />
            </HStack>
          </Link>
          <SearchInput />
        </HStack>
        <Menu />
      </Box>
    </Navigarot>
  );
};

export default NavBar;
