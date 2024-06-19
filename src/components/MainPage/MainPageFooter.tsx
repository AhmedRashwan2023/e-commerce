import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BsClock } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";

const MainPageFooter = () => {
  const activeLocale = useLocale();
  const t = useTranslations("mainPageFotter");
  return (
    <Flex py={20} gap={5} justifyContent={"space-between"}>
      <Card icon={BsClock} title={t("card1Title")}>
        <Text>
          {t("card1TextPart1")}
          <span
            style={{ fontSize: "17px", color: "black", fontWeight: "bold" }}
          >
            &nbsp;{t("card1TextPart2")}&nbsp;
          </span>
        </Text>
        <Text>{t("card1TextPart3")}</Text>
      </Card>
      <Card icon={IoGiftOutline} title={t("card2Title")}>
        {t("card2Text")}
      </Card>
      <Card icon={FaBoxOpen} title={t("card3Title")}>
        {t("card3Text")}
      </Card>
      <Card icon={FiRefreshCcw} title={t("card3Title")}>
        {t("card4Text")}&nbsp;
        <Link
          as={NextLink}
          href={`/${activeLocale}/shopping-items`}
          color={"#01a915"}
          textDecoration={"none"}
          _hover={{ color: "#048414" }}
        >
          {t("card4Link")}
        </Link>
      </Card>
    </Flex>
  );
};

export default MainPageFooter;

const Card = ({
  icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}) => {
  const Icon = icon;
  return (
    <Stack w={300}>
      <Box color={"#19b219"} fontSize={35}>
        <Icon />
      </Box>
      <Text fontSize={20} fontWeight={"semibold"}>
        {title}
      </Text>
      <Box color={"#5c6c75"} fontWeight={"semibold"}>
        {children}
      </Box>
    </Stack>
  );
};
