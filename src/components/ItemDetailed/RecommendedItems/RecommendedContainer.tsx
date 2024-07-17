import { Box, Flex, Heading } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import RecommendedItemCard from "./RecommendedItemCard";
import { ItemProps } from "@/data/types";

const RecommendedContainer = ({products}: {products: ItemProps[]}) => {
  const t = useTranslations("recommendedItems");

  return (
    <Flex flexDirection={"column"} alignContent={"center"} gap={5}>
      <Heading as="h3" size="lg" textAlign={"center"}>
        {t("title")}
      </Heading>

      <Flex flexDirection={"column"} gap={3}>
        {products.map(
          (product, index) =>
            index < 2 && (
              <Box
                key={index}
                overflow="hidden"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
              >
                <RecommendedItemCard item={product} />
              </Box>
            )
        )}
      </Flex>
    </Flex>
  );
};

export default RecommendedContainer;
