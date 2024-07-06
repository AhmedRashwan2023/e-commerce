import { categories } from "@/data/categories";
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

export interface ItemProps {
  id: number;
  name: string;
  category: number;
  weight: number;
  unites: number;
  inStore: boolean;
  isActive: boolean;
  normalPrice: number;
  sellingPrice: number;
  descriptionProduct: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  codeProduct: string;
  sku: string;
  image: string;
  categoryName: string;
  evaluation: number;
}

const ItemCard = ({
  item,
  inWishList,
}: {
  item: ItemProps;
  inWishList: boolean;
}) => {
  const t = useTranslations("shoppingItems");
  const localeActive = useLocale();
  const isSale = item?.sellingPrice < item?.normalPrice ? true : false;

  const getCategoryName = (id: number) => {
    const categoryId = Number(id);
    const category = categories.find((cat) => cat.id === categoryId);
    if (localeActive === "fr") return category ? category.fr : null;
    else return category ? category.ar : null;
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
          <Image src={item.image} boxSize={150} />
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
            <AddToWishList itemId={item.id} inWishList={inWishList} />
            <AddToCartButton item={item} />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
