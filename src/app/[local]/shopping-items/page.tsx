import { bodyPadding } from "@/assets/global";
import PriceRangeSlider from "@/components/shoppingItems/PriceRangeSlider";
import { categories } from "@/data/categories";
import { Box, Flex, Link, Show, Stack, Text } from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import NextLink from "next/link";

const ShoppingItems = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const localeActive = await getLocale();
  const t = await getTranslations("shoppingItems");
  const catId = searchParams.catId || null;
  const priceFrom = searchParams.priceFrom || 0;
  const priceTo = searchParams.priceTo || 1000000;
  const evaluation = searchParams.evaluation || 5;
  const itemName = searchParams.itemName || "";

  const setSearchParams = (name: string, value: string) => {
    let params = {};
    if (searchParams.catId) params = { ...params, catId: searchParams.catId };
    if (searchParams.priceFrom)
      params = { ...params, priceFrom: searchParams.priceFrom };
    if (searchParams.priceTo)
      params = { ...params, priceTo: searchParams.priceTo };
    if (searchParams.evaluation)
      params = { ...params, evaluation: searchParams.evaluation };
    if (searchParams.itemName)
      params = { ...params, itemName: searchParams.itemName };
    params = { ...params, [name]: value };
    return new URLSearchParams(params);
  };

  return (
    <Flex px={bodyPadding} gap={10} py={6}>
      <Show above="lg">
        <Stack w={250} gap={5}>
          <Stack>
            <Text fontSize={19} fontWeight={"semibold"}>
              {t("filterCategories")}
            </Text>
            {categories.map((category, index) => (
              <Link
                key={index}
                as={NextLink}
                href={`?${setSearchParams("catId", category.id.toString())}`}
                _hover={{ color: "#048414", fontWeight: "semibold" }}
                fontSize={14}
                borderBottomColor={"#b0b0b0"}
                borderBottomWidth={1}
                py={1}
              >
                {localeActive === "fr" ? category.fr : category.ar}
              </Link>
            ))}
          </Stack>
          <Stack>
            <Text fontSize={19} fontWeight={"semibold"}>
              {t("filterPrice")}
            </Text>
            <PriceRangeSlider />
          </Stack>
        </Stack>
      </Show>
      <Box>Items</Box>
    </Flex>
  );
};

export default ShoppingItems;
