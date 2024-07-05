import { bodyPadding } from "@/assets/global";
import { products } from "@/data/products";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import ItemCard from "../ShoppingItems/ItemCard";
import ItemCardContainer from "../ShoppingItems/ItemCardContainer";

const PopularProducts = async () => {
  const t = await getTranslations("popularProducts");
  const userWishList = [1, 4, 5];
  return (
    <Box px={bodyPadding}>
      <Stack>
        <Text fontSize={25} fontWeight={"semibold"}>
          {t("title")}
        </Text>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={6}>
          {products.map((product, index) => (
            <ItemCardContainer key={index}>
              <ItemCard
                item={product}
                inWishList={userWishList.includes(product.id)}
              />
            </ItemCardContainer>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default PopularProducts;
