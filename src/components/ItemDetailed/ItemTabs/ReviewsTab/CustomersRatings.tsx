import { HStack, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { MdOutlineStar } from "react-icons/md";
import RatingBar from "./RatingBar";
import ItemEvaluationProvider from "@/components/ShoppingItemsPage/ItemEvaluationProvider";

const ratings = [
  3, 1, 2, 5, 4, 3, 1, 2, 4, 5, 3, 2, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2,
  3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3,
  1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1,
  5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 1, 5, 3, 4, 5, 2, 3, 5, 3, 1,
];

const ClientsRatings = () => {
  const t = useTranslations("itemReviews");

  const getStatistics = () => {
    let total = 0;
    let pres5 = 0;
    let pres4 = 0;
    let pres3 = 0;
    let pres2 = 0;
    let pres1 = 0;

    // ratings.forEach((rating) => (total += rating));

    for (let i = 0; i < ratings.length; i++) {
      total += ratings[i];

      if (ratings[i] === 5) pres5 += 1;
      if (ratings[i] === 4) pres4 += 1;
      if (ratings[i] === 3) pres3 += 1;
      if (ratings[i] === 2) pres2 += 1;
      if (ratings[i] === 1) pres1 += 1;
    }

    const avgTotal = total / ratings.length;
    const avg1 = (pres1 / ratings.length) * 100;
    const avg2 = (pres2 / ratings.length) * 100;
    const avg3 = (pres3 / ratings.length) * 100;
    const avg4 = (pres4 / ratings.length) * 100;
    const avg5 = (pres5 / ratings.length) * 100;

    return { avgTotal, avg1, avg2, avg3, avg4, avg5 };
  };

  return (
    <Stack gap={3}>
      <Text fontWeight={"semibold"} fontSize={24}>
        {t("customerRatingsTitle")}
      </Text>
      <HStack gap={4} color={"#5b5b5b"}>
        <ItemEvaluationProvider
          starsNumber={getStatistics().avgTotal}
          fontSize={17}
        />
        <Text>{`${getStatistics().avgTotal} ${t("outOf")} 5`}</Text>
        <Text fontSize={12}>{`${ratings.length} ${t("globalReviews")}`}</Text>
      </HStack>
      <Progress star={"5"} rating={getStatistics().avg5} />
      <Progress star={"4"} rating={getStatistics().avg4} />
      <Progress star={"3"} rating={getStatistics().avg3} />
      <Progress star={"2"} rating={getStatistics().avg2} />
      <Progress star={"1"} rating={getStatistics().avg1} />
      <Text fontWeight={"semibold"} fontSize={23}>
        {t("customerRatingFooterHead")}
      </Text>
      <Text fontWeight={"semibold"} fontSize={15} color={"#5b5b5b"}>
        {t("customerRatingFooterTail")}
      </Text>
    </Stack>
  );
};

export default ClientsRatings;

const Progress = ({ star, rating }: { star: string; rating: number }) => {
  return (
    <HStack color={"#999999"}>
      <HStack gap={0}>
        <Text>{star}</Text>
        <Stack color={"#ffc107"} fontSize={17}>
          <MdOutlineStar />
        </Stack>
      </HStack>
      <RatingBar rating={rating} />
      <Text fontSize={15}>{`${rating.toString()}%`}</Text>
    </HStack>
  );
};
