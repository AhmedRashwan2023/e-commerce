"use client";
import { useWishlistContext } from "@/contexts/wishlistContext";
import { Box, Link } from "@chakra-ui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { ItemProps } from "@/data/types";

const AddToWishList = ({
  fontSize = 24,
  item,
}: {
  fontSize?: number;
  item: ItemProps;
}) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  const itemFound: ItemProps = wishlistItems.find(
    (i: ItemProps) => i.id === item.id
  );

  const updateWithList = () => {
    if (itemFound) removeFromWishlist(item);
    else if (!itemFound) addToWishlist(item);
  };

  return (
    <Box fontSize={fontSize} color={"#cc0000"}>
      <Link onClick={updateWithList}>
        {itemFound ? <GoHeartFill /> : <GoHeart />}
      </Link>
    </Box>
  );
};

export default AddToWishList;
