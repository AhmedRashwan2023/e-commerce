import { Flex, Stack, Image, Text, Heading } from "@chakra-ui/react";
import LabelBagde from "./LabelBagde";
import ShopNowButton from "./ShopNowButton";
import { useTranslations } from "next-intl";

const SlideOne = () => {
  const t = useTranslations("slideOne");
  return (
    <Flex
      mx={{ base: 3, md: 55 }}
      my={{ base: 3, md: 130 }}
      justifyContent={{ base: "center", sm: "space-between" }}
      // justifyContent={"space-between"}
      wrap={{ base: "wrap-reverse", md: "nowrap" }}
      overflow={"hidden"}
      gap={3}
    >
      <Stack
        // minW={400}
        w={450}
        gap={5}
      >
        <LabelBagde>{t("bagde")}</LabelBagde>
        <Heading as="h2" size={{ base: "xl", lg: "2xl" }}>
          {t("heading")}
        </Heading>
        <Text fontSize={20} fontWeight={"semibold"}>
          {t("text")}
        </Text>
        <ShopNowButton>{t("shopNowButton")}</ShopNowButton>
      </Stack>
      <Image
        alt={""}
        src="/images/slider/slideOne.png"
        boxSize={{ base: 300, md: 350, "2xl": 570 }}
      />
    </Flex>
  );
};

export default SlideOne;
