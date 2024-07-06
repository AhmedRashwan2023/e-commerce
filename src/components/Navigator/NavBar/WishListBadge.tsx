"use client";
import { Link } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";
import { GoHeart } from "react-icons/go";
import { NavBarProps } from ".";
import LoginModal from "../../Account/LoginModel";
import CountBadge from "../CountBadge";
import { useWishlistContext } from "@/contexts/wishlistContext";

const WishListBadge = () => {
  const localeActive = useLocale();
  const { wishlistItems } = useWishlistContext();
  return (
    <CountBadge count={wishlistItems.length}>
      <Link fontSize={20} as={NextLink} href={`/${localeActive}/wishlist`}>
        <GoHeart />
      </Link>
    </CountBadge>
  );
};

export default WishListBadge;
