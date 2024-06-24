import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";

const ItemDetailsPage = ({ params }: { params: { itemId: string } }) => {
  return <Box px={bodyPadding}>{params.itemId}</Box>;
};

export default ItemDetailsPage;
