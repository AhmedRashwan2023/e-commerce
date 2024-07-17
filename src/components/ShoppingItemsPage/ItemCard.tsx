// import { categories } from "@/data/categories";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import ItemEvaluationProvider from "./ItemEvaluationProvider";
import PriceProvider from "./PriceProvider";
import AddToCartButton from "./AddToCartButton";
import AddToWishList from "./AddToWishList";
import { Category, ItemProps } from "@/data/types";
import { postRequest } from "@/utils/db";

const ItemCard = async ({ item }: { item: ItemProps }) => {
  const t = useTranslations("shoppingItems");
  const localeActive = useLocale();
  const isSale = item?.sellingPrice < item?.normalPrice ? true : false;
  const categories = await postRequest("/api/categories/getCats", {});

  const getCategoryName = (id: number) => {
    const categoryId = Number(id);
    const category = categories.find((cat: Category) => cat.id === categoryId);
    return category?.name;
  };

  return (
    <Card overflow="hidden" variant="solid" pt={5}>
      {isSale && (
        <Box
          backgroundColor={"#db3030"}
          color={"white"}
          fontSize={"smaller"}
          fontWeight={"semibold"}
          px={1}
          borderRadius={4}
          position={"absolute"}
          left={5}
          top={5}
        >
          <Text>{t("onSale")}</Text>
        </Box>
      )}
      <Flex flexDir={"column"} alignItems={"center"}>
        <Link as={NextLink} href={`/${localeActive}/shopping-items/${item.id}`}>
          <Image
            src={
              item.image
                ? item.image.replaceAll(
                    "/var/www/html/images",
                    "https://srv14.optimgov.com/images/"
                  )
                : ""
            }
            boxSize={150}
          />
        </Link>
      </Flex>
      <CardBody>
        <Text fontWeight={"semibold"} color={"#9c9c9c"}>
          {getCategoryName(item.category)}
        </Text>
        <Text fontWeight={"semibold"}>{item.name}</Text>
        <ItemEvaluationProvider starsNumber={item.evaluation} />
        <Flex justifyContent={"space-between"} pt={5}>
          <PriceProvider
            normalPrice={item.normalPrice}
            sellingPrice={item.sellingPrice}
          />
          <HStack>
            <AddToWishList item={item} />
            <AddToCartButton item={item} />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
