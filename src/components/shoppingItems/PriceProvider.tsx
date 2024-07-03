import { HStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const PriceProvider = ({
  sellingPrice,
  normalPrice,
  fontSize,
}: {
  sellingPrice: number;
  normalPrice: number;
  fontSize?: number;
}) => {
  const isSale = sellingPrice < normalPrice ? true : false;
  const t = useTranslations("shoppingItems");

  return (
    <HStack fontSize={fontSize ? fontSize : 14} fontWeight={"semibold"}>
      {isSale && <Text>{`${sellingPrice} ${t("currency")}`}</Text>}
      <Text
        color={isSale ? "#9c9c9c" : "black"}
        textDecoration={isSale ? "line-through" : "none"}
      >{`${normalPrice} ${t("currency")}`}</Text>
    </HStack>
  );
};

export default PriceProvider;
