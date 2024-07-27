import { bodyPadding } from "@/assets/global";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const HelpCenterIntro = () => {
  const t = useTranslations("helpCenter");
  return (
    <Flex
      py={20}
      wrap={"wrap"}
      justifyContent={"space-evenly"}
      flexDir={"row-reverse"}
      gap={10}
    >
      <Image alt={""} src="/images/assistance.png" boxSize={200} />
      <Stack>
        <Heading as="h2" size="xl">
          {t("h1Title")}
        </Heading>
        <Text fontSize={18} fontWeight={"semibold"}>
          {t("description")}
        </Text>
        <Text fontSize={15} fontWeight={"semibold"} color={"#797b7e"} w={500}>
          {t("p")}
        </Text>
      </Stack>
    </Flex>
  );
};

export default HelpCenterIntro;
