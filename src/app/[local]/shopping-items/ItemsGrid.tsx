import ItemCard from "@/components/ShoppingItems/ItemCard";
import ItemCardContainer from "@/components/ShoppingItems/ItemCardContainer";
import ItemsDisplayAndOrder from "@/components/ShoppingItems/ItemsDisplayAndOrder";
import { categories } from "@/data/categories";
// import { products } from "@/data/products";
import { ItemProps, ItemsGridProps } from "@/data/types";
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
import { getRequest } from "@/utils/db";

const displayOptions = [50, 30, 20, 10];
const orderOptions = ["featured", "priceLower", "priceHigher", "date"];

const ItemsGrid = async ({
  initialSearchParams,
  categoryName,
}: ItemsGridProps & { categoryName: string }) => {
  const t = await getTranslations("shoppingItems");
  const localeActive = await getLocale();

  let validSearchParams = {
    catId: categories.some(
      (cat) => cat.id === Number(initialSearchParams.catId)
    )
      ? initialSearchParams.catId
      : "",
    minPrice:
      initialSearchParams.minPrice < 0 ? 0 : initialSearchParams.minPrice,
    maxPrice:
      initialSearchParams.maxPrice > 15000
        ? 15000
        : initialSearchParams.maxPrice,
    evaluation:
      initialSearchParams.evaluation < 1 && initialSearchParams.evaluation > 5
        ? initialSearchParams.evaluation
        : 5,
    name: initialSearchParams.name,
    display: 10,
    orderBy: "featured",
    page: 1,
  };

  console.log("catId", validSearchParams.catId);
  console.log(validSearchParams.maxPrice);
  const products = await getRequest(
    `/api/products/getProductsByParam?min_price=${
      validSearchParams.minPrice
    }&max_price=${validSearchParams.maxPrice}${
      validSearchParams.catId &&
      validSearchParams.catId !== "all" &&
      `&cat_id=${validSearchParams.catId}`
    }`
    // `/api/products/getProductsByParam?cat_id=&min_price=0&max_price=15000`
  );

  validSearchParams = {
    ...validSearchParams,
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
    minPrice: validSearchParams.minPrice.toString(), // Convert number to string
    maxPrice: validSearchParams.maxPrice.toString(), // Convert number to string
    evaluation: validSearchParams.evaluation.toString(), // Convert number to string
    name: validSearchParams.name, // Already a string
    display: validSearchParams.display.toString(), // Convert number to string
    orderBy: validSearchParams.orderBy, // Already a string
    page: validSearchParams.page.toString(), // Convert number to string
  };

  const isPrevPageDisabled = Number(validSearchParams.page) <= 1 ? true : false;
  const isNextPageDisabled =
    Number(validSearchParams.page) <
    Math.ceil(products.length / initialSearchParams.display)
      ? false
      : true;

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
          (product: ItemProps, index: number) =>
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
        <Box
          borderRadius={7}
          borderColor={"#d9d9d9"}
          borderWidth={1}
          fontSize={24}
          p={2}
          backgroundColor={isPrevPageDisabled ? "#d9d9d9" : "white"}
          color={isPrevPageDisabled ? "#999999" : "black"}
          _hover={{
            bg: !isPrevPageDisabled && "#ffd966",
            color: !isPrevPageDisabled && "#ffffff",
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
        >
          {!isPrevPageDisabled ? (
            <Link
              as={NextLink}
              href={`?${setSearchParams(
                convertedSearchParams,
                "page",
                (Number(validSearchParams.page) - 1).toString()
              )}`}
            >
              {localeActive === "fr" ? <FaCaretLeft /> : <FaCaretRight />}
            </Link>
          ) : (
            <>{localeActive === "fr" ? <FaCaretLeft /> : <FaCaretRight />}</>
          )}
        </Box>
        <Text
          borderRadius={7}
          borderColor={"#d9d9d9"}
          borderWidth={1}
          py={2}
          px={4}
          fontSize={15}
          fontWeight={"semibold"}
        >
          {validSearchParams.page}
        </Text>
        <Box
          borderRadius={7}
          borderColor={"#d9d9d9"}
          borderWidth={1}
          p={2}
          fontSize={24}
          backgroundColor={isNextPageDisabled ? "#d9d9d9" : "white"}
          color={isNextPageDisabled ? "#999999" : "black"}
          _hover={{
            bg: !isNextPageDisabled && "#ffd966",
            color: !isNextPageDisabled && "#ffffff",
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
        >
          {!isNextPageDisabled ? (
            <Link
              as={NextLink}
              href={`?${setSearchParams(
                convertedSearchParams,
                "page",
                (Number(validSearchParams.page) + 1).toString()
              )}`}
            >
              {localeActive === "fr" ? <FaCaretRight /> : <FaCaretLeft />}
            </Link>
          ) : (
            <>{localeActive === "fr" ? <FaCaretRight /> : <FaCaretLeft />}</>
          )}
        </Box>
      </HStack>
    </Stack>
  );
};

export default ItemsGrid;
