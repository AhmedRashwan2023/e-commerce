import { HStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

const PriceProvider = ({
  sellingPrice,
  normalPrice,
}: {
  sellingPrice: number;
  normalPrice: number;
}) => {
  const isSale = sellingPrice < normalPrice ? true : false;
  const t = useTranslations("shoppingItems");

  return (
    <HStack fontSize={16} fontWeight={"semibold"}>
      {isSale && <Text>{`${sellingPrice} ${t("currency")}`}</Text>}
      <Text
        color={isSale ? "#9c9c9c" : "black"}
        textDecoration={isSale ? "line-through" : "none"}
      >{`${normalPrice} ${t("currency")}`}</Text>
    </HStack>
  );
};

export default PriceProvider;
