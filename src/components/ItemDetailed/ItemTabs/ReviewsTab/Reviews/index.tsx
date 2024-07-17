import { Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
// import ReviewsContainer from "./ReviewsContainer";

const Reviews = () => {
  const t = useTranslations("itemReviews");

  return (
    <Stack gap={3}>
      <Text fontWeight={"semibold"} fontSize={24} pb={6}>
        {t("reviews")}
      </Text>
      {/* <ReviewsContainer /> */}
    </Stack>
  );
};

export default Reviews;
