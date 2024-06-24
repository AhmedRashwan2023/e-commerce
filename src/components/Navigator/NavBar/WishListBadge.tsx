import CountBadge from "../CountBadge";
import { Box } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";

const WishListBadge = () => {
  return (
    <CountBadge count={5}>
      <Box fontSize={20}>
        <FiHeart />
      </Box>
    </CountBadge>
  );
};

export default WishListBadge;
