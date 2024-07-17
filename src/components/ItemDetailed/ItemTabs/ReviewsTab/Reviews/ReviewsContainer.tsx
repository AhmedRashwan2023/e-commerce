// "use client";

// import { reviews } from "@/data/reviews";
// import { Button, HStack, Stack } from "@chakra-ui/react";
// import { useState } from "react";
// import ReviewCard from "./ReviewCard";
// import { useTranslations } from "next-intl";

// const ReviewsContainer = () => {
//   const [showNum, setShowNum] = useState(4);
//   const t = useTranslations("itemReviews");
//   return (
//     <Stack gap={5}>
//       {reviews.map(
//         (review, index) =>
//           index < showNum && <ReviewCard key={index} review={review} />
//       )}
//       <HStack justifyContent={"space-evenly"}>
//         <Button
//           backgroundColor={"#01114d"}
//           _hover={{ bg: "#012199" }}
//           color={"white"}
//           size="sm"
//           isDisabled={showNum >= reviews.length}
//           onClick={() => setShowNum(showNum + 4)}
//         >
//           {t("loadMore")}
//         </Button>
//         <Button
//           colorScheme="yellow"
//           size="sm"
//           isDisabled={showNum <= 4}
//           onClick={() => setShowNum(showNum - 4)}
//         >
//           {t("loadLess")}
//         </Button>
//       </HStack>
//     </Stack>
//   );
// };

// export default ReviewsContainer;
