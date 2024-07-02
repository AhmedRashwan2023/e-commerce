import { Link } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { GoHeart } from "react-icons/go";
import { NavBarProps } from ".";
import LoginModel from "../../Account/LoginModel";
import CountBadge from "../CountBadge";

const WishListBadge: React.FC<NavBarProps> = ({ session }) => {
  const localeActive = useLocale();

  return (
    <CountBadge>
      {!session && (
        <LoginModel
          icon={"GoHeart"}
          // specialURL={`/${localeActive}/account-settings`}
          // redirect={false}
          extraFn={async () => {
            "use server";
            console.log("Extra FN");
          }}
        />
      )}
      {session && (
        <Link fontSize={20} as={NextLink} href={`/${localeActive}/orders`}>
          <GoHeart />
        </Link>
      )}
    </CountBadge>
  );
};

export default WishListBadge;
