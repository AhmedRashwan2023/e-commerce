import { bodyPadding } from "@/assets/global";
import Evaluation from "@/components/ShoppingItems/Evaluation";
import PriceRangeSlider from "@/components/ShoppingItems/PriceRangeSlider";
import { categories } from "@/data/categories";
import { setSearchParams } from "@/services/shoppingItems";
import { Flex, Link, Show, Stack, Text } from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import NextLink from "next/link";
import ItemsGrid from "./ItemsGrid";

const ShoppingItems = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const localeActive = await getLocale();
  const t = await getTranslations("shoppingItems");

  const initialSearchParams = {
    catId: (searchParams.catId || 0) as number,
    priceFrom: (searchParams.priceFrom || 0) as number,
    priceTo: (searchParams.priceTo || 300) as number,
    evaluation: (searchParams.evaluation || 5) as number,
    name: (searchParams.name || "") as string,
    display: (searchParams.display || 50) as number,
    orderBy: (searchParams.orderBy || "featured") as string,
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
                href={`?${setSearchParams(
                  searchParams,
                  "catId",
                  category.id.toString()
                )}`}
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
          <Stack>
            <Text fontSize={19} fontWeight={"semibold"}>
              {t("filterEvaluation")}
            </Text>
            <Evaluation />
          </Stack>
        </Stack>
      </Show>
      <ItemsGrid initialSearchParams={initialSearchParams} />
    </Flex>
  );
};

export default ShoppingItems;
