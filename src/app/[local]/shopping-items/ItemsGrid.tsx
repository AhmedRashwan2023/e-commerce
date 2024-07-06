import ItemCard from "@/components/ShoppingItems/ItemCard";
import ItemCardContainer from "@/components/ShoppingItems/ItemCardContainer";
import ItemsDisplayAndOrder from "@/components/ShoppingItems/ItemsDisplayAndOrder";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Box, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";

interface Props {
  initialSearchParams: {
    catId: number;
    mixPrice: number;
    maxPrice: number;
    evaluation: number;
    name: string;
    display: number;
    orderBy: string;
  };
}

const displayOptions = [50, 30, 20, 10];
const orderOptions = ["featured", "priceLower", "priceHigher", "date"];

const ItemsGrid = async ({ initialSearchParams }: Props) => {
  const userWishList = [1, 4, 5];
  const localeActive = await getLocale();
  const t = await getTranslations("shoppingItems");

  const validSearchParams = {
    catId: categories.some(
      (cat) => cat.id === Number(initialSearchParams.catId)
    )
      ? initialSearchParams.catId
      : 0,
    mixPrice:
      initialSearchParams.mixPrice < 6 ? 6 : initialSearchParams.mixPrice,
    maxPrice:
      initialSearchParams.maxPrice > 300 ? 300 : initialSearchParams.maxPrice,
    evaluation:
      initialSearchParams.evaluation < 1 && initialSearchParams.evaluation > 5
        ? initialSearchParams.evaluation
        : 5,
    name: initialSearchParams.name,
    display: !displayOptions.includes(initialSearchParams.display)
      ? 50
      : initialSearchParams.display,
    orderBy: !orderOptions.includes(initialSearchParams.orderBy)
      ? "featured"
      : initialSearchParams.orderBy,
  };

  const getCategoryName = (id: number) => {
    const categoryId = Number(id);
    const category = categories.find((cat) => cat.id === categoryId);
    if (localeActive === "fr") return category ? category.fr : null;
    else return category ? category.ar : null;
  };

  return (
    <Stack gap={5} w={{ base: "100%", lg: "80%" }}>
      {validSearchParams.catId && validSearchParams.catId !== 0 && (
        <Box
          backgroundColor={"#f0f3f2"}
          borderRadius={5}
          px={10}
          py={8}
          fontSize={"30px"}
          fontWeight={"semibold"}
        >
          {getCategoryName(validSearchParams.catId)}
        </Box>
      )}
      <Flex justifyContent={"space-between"} wrap={"wrap"}>
        <HStack gap={1}>
          <Text fontWeight={"semibold"}>24</Text>
          <Text>{t("productsFound")}</Text>
        </HStack>
        <ItemsDisplayAndOrder />
      </Flex>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={6}>
        {products.map((product, index) => (
          <ItemCardContainer key={index}>
            <ItemCard item={product} />
          </ItemCardContainer>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ItemsGrid;
