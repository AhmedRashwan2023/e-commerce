import ItemCard from "@/components/ShoppingItems/ItemCard";
import ItemCardContainer from "@/components/ShoppingItems/ItemCardContainer";
import ItemsDisplayAndOrder from "@/components/ShoppingItems/ItemsDisplayAndOrder";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ItemsGridProps } from "@/data/types";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { setSearchParams } from "@/services/shoppingItems";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const displayOptions = [50, 30, 20, 10];
const orderOptions = ["featured", "priceLower", "priceHigher", "date"];

const ItemsGrid = async ({
  initialSearchParams,
  categoryName,
}: ItemsGridProps & { categoryName: string }) => {
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
    display: !displayOptions.includes(Number(initialSearchParams.display))
      ? 10
      : initialSearchParams.display,
    orderBy: !orderOptions.includes(initialSearchParams.orderBy)
      ? "featured"
      : initialSearchParams.orderBy,
    page:
      initialSearchParams.page <=
        Math.ceil(products.length / initialSearchParams.display) &&
      Number(initialSearchParams.page) !== 0
        ? initialSearchParams.page
        : 1,
  };
  const convertedSearchParams: {
    [key: string]: string | string[] | undefined;
  } = {
    catId: validSearchParams.catId.toString(), // Convert number to string
    mixPrice: validSearchParams.mixPrice.toString(), // Convert number to string
    maxPrice: validSearchParams.maxPrice.toString(), // Convert number to string
    evaluation: validSearchParams.evaluation.toString(), // Convert number to string
    name: validSearchParams.name, // Already a string
    display: validSearchParams.display.toString(), // Convert number to string
    orderBy: validSearchParams.orderBy, // Already a string
    page: validSearchParams.page.toString(), // Convert number to string
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
          {categoryName}
        </Box>
      )}
      <Flex justifyContent={"space-between"} wrap={"wrap"}>
        <HStack gap={1}>
          <Text fontWeight={"semibold"}>{products.length}</Text>
          <Text>{t("productsFound")}</Text>
        </HStack>
        <ItemsDisplayAndOrder />
      </Flex>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={6}>
        {products.map(
          (product, index) =>
            index <
              Number(validSearchParams.page) *
                Number(validSearchParams.display) &&
            index >=
              Number(validSearchParams.page - 1) *
                Number(validSearchParams.display) && (
              <ItemCardContainer key={index}>
                <ItemCard item={product} />
              </ItemCardContainer>
            )
        )}
      </SimpleGrid>
      <HStack justifyContent={"flex-end"} gap={4}>
        <Button
          fontSize={35}
          color={"#011973"}
          variant={"outline"}
          isDisabled={Number(validSearchParams.page) <= 1 ? true : false}
        >
          {Number(validSearchParams.page) > 1 ? (
            <Link
              as={NextLink}
              href={`?${setSearchParams(
                convertedSearchParams,
                "page",
                (Number(validSearchParams.page) - 1).toString()
              )}`}
            >
              <FaCaretLeft />
            </Link>
          ) : (
            <FaCaretLeft />
          )}
        </Button>
        <Text
          px={3}
          py={1}
          borderWidth={1}
          borderColor={"#bcbcbc"}
          fontSize={18}
        >
          {validSearchParams.page}
        </Text>
        <Button
          fontSize={35}
          color={"#011973"}
          variant={"outline"}
          isDisabled={
            Number(validSearchParams.page) <
            Math.ceil(products.length / initialSearchParams.display)
              ? false
              : true
          }
        >
          {Number(validSearchParams.page) <
          Math.ceil(products.length / initialSearchParams.display) ? (
            <Link
              as={NextLink}
              href={`?${setSearchParams(
                convertedSearchParams,
                "page",
                (Number(validSearchParams.page) + 1).toString()
              )}`}
            >
              <FaCaretRight />
            </Link>
          ) : (
            <FaCaretRight />
          )}
        </Button>
      </HStack>
    </Stack>
  );
};

export default ItemsGrid;
