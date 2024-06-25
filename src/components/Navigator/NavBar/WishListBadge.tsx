import CountBadge from "../CountBadge";
import { Box, Link } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { NavBarProps } from ".";
import NextLink from "next/link";
import SignInForm from "@/components/Account/SignInForm";
import LoginModel from "./ProfileBadge/LoginModel";
import { useLocale } from "next-intl";

const WishListBadge: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();

  return (
    <CountBadge>
      {!session && (
        <LoginModel icon={"FiHeart"}>
          <SignInForm specialURL={`/${localeActive}/account-settings`} />
        </LoginModel>
      )}
      {session && (
        <Link fontSize={20} as={NextLink} href={`/${localeActive}/orders`}>
          <FiHeart />
        </Link>
      )}
    </CountBadge>
  );
};

export default WishListBadge;
