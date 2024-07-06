import { bodyPadding } from "@/assets/global";
import { Box, Flex, HStack, Image, Link, Show } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import Navigarot from "..";
import Menu from "../Menu";
import SideMenuDrawer from "../Menu/SideMenu/SideMenuDrawer";
import CartDrawer from "./CartDrawer";
import ProfileBadge from "./ProfileBagde";
import SearchInput from "./SearchInput";
import WishListBadge from "./WishListBadge";
import { getLocale } from "next-intl/server";
import { postRequest } from "@/utils/db";

export interface Category {
  id: number;
  name: string;
  description: string;
  status: boolean;
  image: string | null;
  parentCategoryId: number;
  parentCategoryName: string | null;
  countProducts: number;
}

export interface NavBarProps {
  session: any;
  menuLocation?: string;
  closeDrawer?: () => void;
  categories?: Category[];
}
const NavBar: React.FC<NavBarProps> = async ({ session }) => {
  const localeActive = await getLocale();
  const categories = await postRequest("/api/categories/getCats", {});
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
            <WishListBadge />
            <CartDrawer session={session} />
            <ProfileBadge session={session} />
            <Show below="lg">
              <SideMenuDrawer session={session} categories={categories} />
            </Show>
          </HStack>
        </Flex>
        <Show above="lg">
          <Menu session={session} categories={categories} />
        </Show>
      </Box>
    </Navigarot>
  );
};

export default NavBar;
