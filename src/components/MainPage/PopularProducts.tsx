import { bodyPadding } from "@/assets/global";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import ItemCardContainer from "../ShoppingItemsPage/ItemCardContainer";
import ItemCard from "../ShoppingItemsPage/ItemCard";
import { getRequest } from "@/utils/db";
import { ItemProps } from "@/data/types";

const PopularProducts = async () => {
  const t = await getTranslations("popularProducts");
  const userWishList = [1, 4, 5];
  const products = await getRequest("/api/products/getProductsByParam");
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
