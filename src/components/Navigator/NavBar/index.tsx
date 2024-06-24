import Navigarot from "..";
import {
  Box,
  HStack,
  Link,
  Image,
  Show,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import { bodyPadding } from "@/assets/global";
import SearchInput from "./SearchInput";
import Menu from "../Menu";
import NextLink from "next/link";
import { useLocale } from "next-intl";
import WishListBadge from "./WishListBadge";
import CartDrawer from "./CartDrawer";
import ProfileBadge from "./ProfileBadge";
import SideMenuDrawer from "../Menu/SideMenu/SideMenuDrawer";

export interface NavBarProps {
  session: any;
  menuLocation?: string;
  closeDrawer?: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();
  return (
    <Navigarot>
      <Box backgroundColor={"#01114d"} px={bodyPadding}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <HStack gap={16} py={5}>
            <Link as={NextLink} href={`/${localeActive}`}>
              <HStack minW={100} w={100}>
                <Image alt="logo" src={"/images/header/RM.png"} boxSize={50} />
                <Image
                  alt="logo"
                  src={"/images/header/dgapr.png"}
                  boxSize={50}
                />
              </HStack>
            </Link>
            <Show above="lg">
              <SearchInput />
            </Show>
          </HStack>
          <HStack gap={5}>
            <Show above="lg">
              <WishListBadge />
            </Show>
            <CartDrawer />
            <ProfileBadge session={session} />
            <Show below="lg">
              <SideMenuDrawer session={session} />
            </Show>
          </HStack>
        </Flex>
        <Show above="lg">
          <Menu session={session} />
        </Show>
      </Box>
    </Navigarot>
  );
};

export default NavBar;
