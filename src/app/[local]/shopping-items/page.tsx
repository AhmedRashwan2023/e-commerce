import { bodyPadding } from "@/assets/global";
import Evaluation from "@/components/ShoppingItems/Evaluation";
import PriceRangeSlider from "@/components/ShoppingItems/PriceRangeSlider";
import { setSearchParams } from "@/services/shoppingItems";
import { Flex, Link, Show, Stack, Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import ItemsGrid from "./ItemsGrid";
import { postRequest } from "@/utils/db";
import { Category } from "@/data/types";

const ShoppingItems = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const t = await getTranslations("shoppingItems");

  const categories = await postRequest("/api/categories/getCats", {});

  const initialSearchParams = {
    catId: (searchParams.catId || 0) as number,
    mixPrice: (searchParams.mixPrice || 0) as number,
    maxPrice: (searchParams.maxPrice || 300) as number,
    evaluation: (searchParams.evaluation || 5) as number,
    name: (searchParams.name || "") as string,
    display: (searchParams.display || 10) as number,
    orderBy: (searchParams.orderBy || "featured") as string,
    page: (searchParams.page || 1) as number,
  };

  const selectedCat = categories.find(
    (category: Category) => category.id === Number(initialSearchParams.catId)
  );

  return (
    <Flex px={bodyPadding} gap={10} py={6}>
      <Show above="lg">
        <Stack w={250} gap={5}>
          <Stack>
            <Text fontSize={19} fontWeight={"semibold"}>
              {t("filterCategories")}
            </Text>
            {categories.map((category: Category, index: number) => (
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
                {category.name}
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
      <ItemsGrid
        initialSearchParams={initialSearchParams}
        categoryName={selectedCat?.name}
      />
    </Flex>
  );
};

export default ShoppingItems;
