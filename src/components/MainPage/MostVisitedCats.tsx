import { bodyPadding } from "@/assets/global";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";

const MostVisitedCats = () => {
  const t = useTranslations("mostVisitedCats");

  return (
    <Box px={bodyPadding} pb={12}>
      <Stack>
        <Text fontSize={25} fontWeight={"semibold"}>
          {t("title")}
        </Text>
        <SimpleGrid columns={{ sm: 1, lg: 2 }} gap={4}>
          <GridItem
            imgUrl="images/most-visited/1.jpg"
            text={t("wood")}
            id="1"
          />
          <GridItem
            imgUrl="images/most-visited/2.jpg"
            text={t("leather")}
            id="4"
          />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default MostVisitedCats;

const GridItem = ({
  imgUrl,
  text,
  id,
}: {
  imgUrl: string;
  text: string;
  id: string;
}) => {
  const t = useTranslations("mostVisitedCats");
  const localeActive = useLocale();

  return (
    <Box
      borderWidth={1}
      _hover={{ borderColor: "blue" }}
      borderRadius={5}
      h={"200px"}
      p={5}
      position={"relative"}
      overflow="hidden"
    >
      <Image
        src={imgUrl}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
        opacity={0.7}
      />
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        h={"100%"}
        px={2}
        gap={1}
      >
        <Text fontWeight={"bold"} fontSize={30}>
          {text}
        </Text>
        <Link
          px={2}
          w={"fit-content"}
          as={NextLink}
          href={`/${localeActive}/shopping-items?catId=${id}`}
        >
          <Button
            size="md"
            backgroundColor={"#000"}
            _hover={{ bg: "#444444" }}
            color={"#ffffff"}
          >
            {t("buyNowButton")}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
