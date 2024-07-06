"use client";
import { bodyPadding } from "@/assets/global";
import { useWishlistContext } from "@/contexts/wishlistContext";
import { Box } from "@chakra-ui/react";
import React from "react";

const Wishlist = () => {
  const { wishlistItems } = useWishlistContext();

  return <Box px={bodyPadding}>{wishlistItems.length}</Box>;
};

export default Wishlist;
