import { getSession } from "@/services/auth";
import { Box, Button, Link } from "@chakra-ui/react";
import LoginModal from "../Account/LoginModel";
import { GoHeart, GoHeartFill } from "react-icons/go";
import UpdateWishListHandler from "./UpdateWishListHandler";

export interface AddToWishListProps {
  itemId: number;
  inWishList: boolean;
}

const AddToWishList = async ({ itemId, inWishList }: AddToWishListProps) => {
  const session = await getSession();

  return (
    <Box fontSize={24} color={"#cc0000"}>
      {!session && <LoginModal icon="GoHeart" fontSize={24} />}
      {session && (
        <UpdateWishListHandler itemId={itemId} inWishList={inWishList} />
      )}
    </Box>
  );
};

export default AddToWishList;
