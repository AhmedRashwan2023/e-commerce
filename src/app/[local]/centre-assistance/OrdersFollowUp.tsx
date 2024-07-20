import { Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";

const OrdersFollowUp = () => {
  const t = useTranslations("helpCenter");
  const localeActive = useLocale();

  const handleFAQ = async (formData: FormData) => {
    "use server";
    const question = formData.get("question");
    console.log(question);
  };

  return (
    <Stack gap={5} py={10} mx={21}>
      <Heading as="h3" size="lg">
        {t("question")}
      </Heading>
      <Flex backgroundColor={"rgb(240,243,242)"} p={10} borderRadius={10}>
        <Flex flexDir={"column"} gap={3}>
          <Flex gap={2}>
            <Text fontSize={41} color={"rgb(91,108,117)"}>
              <FaQuestionCircle />
            </Text>
            <Text fontSize={22} fontWeight={"semibold"}>
              {t("FAQTitle")}
            </Text>
          </Flex>
          <Text fontSize={15} color={"#797b7e"} fontWeight={"semibold"}>
            {t("FAQDesc")}
          </Text>
          <form action={handleFAQ}>
            <Input
              name="question"
              placeholder={t("FAQInputPlaceholder")}
              backgroundColor={"white"}
            />
          </form>
        </Flex>
      </Flex>
      <Flex backgroundColor={"rgb(240,243,242)"} p={10} borderRadius={10}>
        <Flex flexDir={"column"} gap={3}>
          <Flex gap={2}>
            <Text fontSize={41} color={"rgb(91,108,117)"}>
              <MdOutlineHeadsetMic />
            </Text>
            <Text fontSize={22} fontWeight={"semibold"}>
              {t("callUsTitle")}
            </Text>
          </Flex>
          <Text fontSize={15} color={"#797b7e"} fontWeight={"semibold"}>
            {t("callUsDesc")}
          </Text>
          <Heading
            as="h3"
            size="lg"
            dir="ltr"
            textAlign={localeActive === "ar" ? "right" : "left"}
          >
            {`05 00 00 00 00`}
          </Heading>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default OrdersFollowUp;
