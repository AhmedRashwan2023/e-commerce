import { Flex, HStack } from "@chakra-ui/react";
import Menu1Categores from "./Menu1Categores";
import Menu2MainPage from "./Menu2MainPage";
import Menu3MoreCategories from "./Menu3MoreCategories";
import Menu4Account from "./Menu4Account";
import Menu5Help from "./Menu5Help";
import { NavBarProps } from "../NavBar";

export interface MenuLocationProps {
  menuLocation?: string;
  closeDrawer?: () => void;
}
const Menu: React.FC<NavBarProps> = ({
  session,
  menuLocation,
  closeDrawer,
}) => {
  return (
    <Flex gap={4} pb={4} color={"#eac102"} alignItems={"center"} wrap={"wrap"}>
      <Menu1Categores menuLocation={menuLocation} closeDrawer={closeDrawer} />
      <Menu2MainPage menuLocation={menuLocation} closeDrawer={closeDrawer} />
      <Menu3MoreCategories
        menuLocation={menuLocation}
        closeDrawer={closeDrawer}
      />
      <Menu4Account
        session={session}
        menuLocation={menuLocation}
        closeDrawer={closeDrawer}
      />
      <Menu5Help menuLocation={menuLocation} closeDrawer={closeDrawer} />
    </Flex>
  );
};

export default Menu;
