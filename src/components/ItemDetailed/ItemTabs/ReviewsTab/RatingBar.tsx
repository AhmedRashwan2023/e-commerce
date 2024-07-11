import { Box, HStack, Text } from "@chakra-ui/react";

const RatingBar = ({ rating = 0 }: { rating: number }) => {
  const ratingString = `${rating.toString()}%`;
  return (
    <Box width={"100%"} backgroundColor={"silver"} height={2} borderRadius={3}>
      <Box
        width={ratingString}
        backgroundColor={"black"}
        height={2}
        borderRadius={3}
      ></Box>
    </Box>
  );
};

export default RatingBar;
