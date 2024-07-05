import { ItemProps } from "@/components/ShoppingItems/ItemCard";
import PriceProvider from "@/components/ShoppingItems/PriceProvider";
import { Card, Flex, Link, Image } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import NextLink from "next/link";

const RecommendedItemCard = ({ item }: { item: ItemProps }) => {
  const localeActive = useLocale();

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      borderWidth={1}
      borderRadius={10}
      borderColor={"#eeeeee"}
    >
      <Link as={NextLink} href={`/${localeActive}/shopping-items/${item.id}`}>
        <Image src={item.image} boxSize={200} mx={5} />
      </Link>
      <PriceProvider
        normalPrice={item.normalPrice}
        sellingPrice={item.sellingPrice}
      />
    </Flex>
  );
};

export default RecommendedItemCard;