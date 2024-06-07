import React from "react";
import { HStack } from "@chakra-ui/react";
import Menu1Categores from "./Menu1Categores";
import Menu2MainPage from "./Menu2MainPage";
import Menu3MoreCategories from "./Menu3MoreCategories";
import Menu4Account from "./Menu4Account";
import Menu5Help from "./Menu5Help";

const Menu = () => {
  return (
    <HStack gap={4} pb={4} color={"#eac102"}>
      <Menu1Categores />
      <Menu2MainPage />
      <Menu3MoreCategories />
      <Menu4Account />
      <Menu5Help />
    </HStack>
  );
};

export default Menu;
