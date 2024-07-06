import { ItemProps } from "@/components/ShoppingItems/ItemCard";
import { Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const DescriptionTab = ({ product }: { product: ItemProps }) => {
  const t = useTranslations("descriptionTab");
  return (
    <Stack>
      <Text fontWeight={"semibold"} fontSize={22} py={2}>
        {t("title")}
      </Text>
      <Text fontWeight={"semibold"} fontSize={18}>
        {t("subTitle")}
      </Text>
      <Text color={"#5b5b5b"}>{product.descriptionProduct}</Text>
      <Text fontWeight={"semibold"} fontSize={18} pt={2}>
        {t("unitTitle")}
      </Text>
      <Text color={"#5b5b5b"}>{product.unites}</Text>
      <Text fontWeight={"semibold"} fontSize={18} pt={2}>
        {t("sellerTitle")}
      </Text>
      <Text color={"#5b5b5b"}>{`{sellerName}`}</Text>
    </Stack>
  );
};

export default DescriptionTab;
