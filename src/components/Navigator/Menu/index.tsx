import { HStack } from "@chakra-ui/react";
import Menu1Categores from "./Menu1Categores";
import Menu2MainPage from "./Menu2MainPage";
import Menu3MoreCategories from "./Menu3MoreCategories";
import Menu4Account from "./Menu4Account";
import Menu5Help from "./Menu5Help";
import { NavBarProps } from "../NavBar";

const Menu: React.FC<NavBarProps> = ({ session }) => {
  return (
    <HStack gap={4} pb={4} color={"#eac102"}>
      <Menu1Categores />
      <Menu2MainPage />
      <Menu3MoreCategories />
      <Menu4Account session={session} />
      <Menu5Help />
    </HStack>
  );
};

export default Menu;
