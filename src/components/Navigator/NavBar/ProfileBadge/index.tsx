import SignInForm from "@/components/Account/SignInForm";
import { Link } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { IoPerson } from "react-icons/io5";
import CountBadge from "../../CountBadge";
import { NavBarProps } from "../../NavBar";
import ProfileLoginModel from "./ProfileLoginModel";

const ProfileBadge: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();
  return (
    <CountBadge>
      {!session && (
        <ProfileLoginModel>
          <SignInForm />
        </ProfileLoginModel>
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
