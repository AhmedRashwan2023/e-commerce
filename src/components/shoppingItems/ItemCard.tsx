import { Flex } from "@chakra-ui/react";

const ItemCard = ({ view }: { view: string }) => {
  return (
    <Flex
      w={view === "list" ? "100%" : 325}
      h={view === "list" ? 270 : 360}
      borderColor={"#bbbbbb"}
      borderWidth={1}
      borderRadius={7}
      px={5}
      py={4}
    >
      as
    </Flex>
  );
};

export default ItemCard;
