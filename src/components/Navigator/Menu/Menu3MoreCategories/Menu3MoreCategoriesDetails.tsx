import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";

const Menu3MoreCategoriesDetails = () => {
  const t = useTranslations("menuMoreCategories");
  const localActive = useLocale();

  return (
    <HStack w={800} flexWrap={"wrap"} p={3}>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item1")}
        </Text>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex1Link1")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex1Link2")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex1Link3")}
        </LinkItem>
      </Flex>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item2")}
        </Text>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex2Link1")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex2Link2")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex2Link3")}
        </LinkItem>
      </Flex>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item3")}
        </Text>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex3Link1")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex3Link2")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex3Link3")}
        </LinkItem>
      </Flex>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item4")}
        </Text>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex4Link1")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex4Link2")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex4Link3")}
        </LinkItem>
      </Flex>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item5")}
        </Text>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex5Link1")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex5Link2")}
        </LinkItem>
        <LinkItem href={`/${localActive}/shopping-items`}>
          {t("menu3Flex5Link3")}
        </LinkItem>
      </Flex>
      <Flex flexDir={"column"} w={250} alignSelf={"flex-start"}>
        <Text color={"#eac102"} fontWeight={"bolder"}>
          {t("menu1Item6")}
        </Text>
      </Flex>
    </HStack>
  );
};

export default Menu3MoreCategoriesDetails;

const LinkItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link as={NextLink} href={href} onClick={onClick}>
      <Box _hover={{ bg: "#EDF2F7" }} p={2} borderRadius={10} w={"100%"}>
        {children}
      </Box>
    </Link>
  );
};
