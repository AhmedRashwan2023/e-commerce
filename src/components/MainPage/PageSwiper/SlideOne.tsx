import { Flex, Stack, Image, Text, Heading } from "@chakra-ui/react";
import LabelBagde from "./LabelBagde";
import ShopNowButton from "./ShopNowButton";
import { useTranslations } from "next-intl";

const SlideOne = () => {
  const t = useTranslations("SlideOne");
  return (
    <Flex
      mx={55}
      my={130}
      justifyContent={"space-between"}
      wrap={"wrap-reverse"}
      gap={3}
    >
      <Stack w={450} gap={5}>
        <LabelBagde>{t("bagde")}</LabelBagde>
        <Heading as="h2" size="2xl">
          {t("heading")}
        </Heading>
        <Text fontSize={20} fontWeight={"semibold"}>
          {t("text")}
        </Text>
        <ShopNowButton>{t("shopNowButton")}</ShopNowButton>
      </Stack>
      <Image alt={""} src="/images/slider/slideOne.png" boxSize={570} />
    </Flex>
  );
};

export default SlideOne;
