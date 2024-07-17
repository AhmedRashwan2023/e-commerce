import { bodyPadding } from "@/assets/global";
import { ItemProps } from "@/data/types";
import { postRequest } from "@/utils/db";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import ItemCard from "../ShoppingItemsPage/ItemCard";
import ItemCardContainer from "../ShoppingItemsPage/ItemCardContainer";

const PopularProducts = async () => {
  const t = await getTranslations("popularProducts");
  const userWishList = [1, 4, 5];
  const products = await postRequest("/api/products/getActiveProds", {});
  return (
    <Box px={bodyPadding}>
      <Stack>
        <Text fontSize={25} fontWeight={"semibold"}>
          {t("title")}
        </Text>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={6}>
          {products.map(
            (product: ItemProps, index: number) =>
              index < 6 && (
                <ItemCardContainer key={index}>
                  <ItemCard item={product} />
                </ItemCardContainer>
              )
          )}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default PopularProducts;
