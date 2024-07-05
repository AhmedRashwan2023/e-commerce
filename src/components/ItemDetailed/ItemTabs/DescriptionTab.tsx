import { Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const DescriptionTab = () => {
  const t = useTranslations("descriptionTab");
  return (
    <Stack>
      <Text fontWeight={"semibold"} fontSize={22} py={2}>
        {t("title")}
      </Text>
      <Text fontWeight={"semibold"} fontSize={18}>
        {t("subTitle")}
      </Text>
      <Text color={"#5b5b5b"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque officiis
        sint saepe omnis sed dolorum veritatis laboriosam deleniti, quos,
        dolores sequi recusandae. Aperiam mollitia odio, ut tempore facere
        assumenda rerum.
      </Text>
      <Text fontWeight={"semibold"} fontSize={18} pt={2}>
        {t("unitTitle")}
      </Text>
      <Text color={"#5b5b5b"}>{`{unitsNumber}`}</Text>
      <Text fontWeight={"semibold"} fontSize={18} pt={2}>
        {t("sellerTitle")}
      </Text>
      <Text color={"#5b5b5b"}>{`{sellerName}`}</Text>
    </Stack>
  );
};

export default DescriptionTab;
