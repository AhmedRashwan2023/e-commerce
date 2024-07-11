import { ItemProps } from "@/data/types";
import { Box, HStack, Text } from "@chakra-ui/react";
import ClientsRatings from "./CustomersRatings";
import Reviews from "./Reviews";

const ReviewsTab = ({ product }: { product: ItemProps }) => {
  return (
    <HStack gap={10} wrap={"wrap"} alignItems={"flex-start"}>
      <Box w={{ base: "100%", lg: "30%" }}>
        <ClientsRatings />
      </Box>
      <Box w={{ base: "100%", lg: "65%" }}>
        <Reviews />
      </Box>
    </HStack>
  );
};

export default ReviewsTab;
