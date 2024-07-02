"use client";

import { GoHeartFill, GoHeart } from "react-icons/go";
import { AddToWishListProps } from "./AddToWishList";
import { Link, useToast } from "@chakra-ui/react";
import { useState } from "react";

const UpdateWishListHandler = ({ itemId, inWishList }: AddToWishListProps) => {
  const [itemFound, setFound] = useState(inWishList);
  const toast = useToast();
  const updateWithList = async () => {
    if (itemFound)
      toast({
        description: `item ${itemId} has been removed from wish list`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    else
      toast({
        description: `item ${itemId} has been added to wish list`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    setFound(!itemFound);
  };

  return (
    <Link onClick={updateWithList}>
      {itemFound ? <GoHeartFill /> : <GoHeart />}
    </Link>
  );
};

export default UpdateWishListHandler;
