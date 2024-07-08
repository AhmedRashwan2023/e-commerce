import { Link } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { IoPerson } from "react-icons/io5";
import { NavBarProps } from "@/data/types";
import LoginModel from "../../Account/LoginModel";
import CountBadge from "../CountBadge";

const ProfileBadge: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();

  return (
    <CountBadge>
      {!session && (
        <LoginModel icon={"IoPerson"} specialURL={`/${localeActive}/orders`} />
      )}
      {session && (
        <Link fontSize={20} as={NextLink} href={`/${localeActive}/orders`}>
          <IoPerson />
        </Link>
      )}
    </CountBadge>
  );
};

export default ProfileBadge;
