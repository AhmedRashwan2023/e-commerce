import { getSession } from "@/services/auth";
import { Box } from "@chakra-ui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import LoginModal from "../Account/LoginModel";
import { handleAddToWishList } from "./actions";

const AddToWishList = async ({ itemId }: { itemId: number }) => {
  const itemsInList = [1, 4, 5];
  const isFound = itemsInList.includes(itemId);
  const session = await getSession();

  return <Box>{!session && <LoginModal icon="GoHeart" />}</Box>;
};

export default AddToWishList;
