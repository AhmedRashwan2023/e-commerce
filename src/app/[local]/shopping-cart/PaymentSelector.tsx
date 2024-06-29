"use client";

import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PaymentSelector = () => {
  const [value, setValue] = useState("COD");
  return (
    <RadioGroup onChange={setValue} value={value} name="payment">
      <RadioWrapper />
    </RadioGroup>
  );
};

export default PaymentSelector;

const RadioWrapper = () => {
  const t = useTranslations("shoppingCart");
  return (
    <Flex
      borderWidth={1}
      borderColor={"#38761d"}
      borderRadius={7}
      cursor="pointer"
      px={5}
      py={2}
    >
      <Radio value={"COD"} disabled={true}>
        <Stack px={5}>
          <Text>{t("COD")}</Text>
        </Stack>
      </Radio>
    </Flex>
  );
};
