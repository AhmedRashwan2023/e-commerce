import { Review } from "@/data/types";
import { Avatar, Text, HStack, Stack, Image, Divider } from "@chakra-ui/react";
import ImageViewer from "./ImageViewer";
import ItemEvaluationProvider from "@/components/ShoppingItemsPage/ItemEvaluationProvider";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Stack gap={4}>
      <HStack alignItems={"flex-start"} gap={7}>
        <Avatar src={review.clientAvatar ?? null} size={"lg"} />
        <Stack gap={3}>
          <Text fontWeight={"semibold"}>{review.clientName}</Text>
          <Text color={"#5b5b5b"} fontSize={13}>
            {review.reviewDate}
          </Text>
          <HStack wrap={"wrap"}>
            <ItemEvaluationProvider starsNumber={review.reviewScore} />
            <Text fontWeight={"bold"}>{review.reviewTitle}</Text>
          </HStack>
          <Text color={"#5b5b5b"} fontWeight={"semibold"}>
            {review.reviewDesc}
          </Text>
          <ImageViewer imgSrc={review.reviewImage} />
        </Stack>
      </HStack>
      <Divider />
    </Stack>
  );
};

export default ReviewCard;
