import { Stack, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import ShippoingOptions from "./ShippoingOptions";
import AddressSelector from "./AddressSelector";
import { addresses } from "@/data/addresses";
import PaymentSelector from "./PaymentSelector";

const AddressAndPayment = async () => {
  const t = await getTranslations("shoppingCart");
  const isDisabled = addresses.length === 0 ? true : false;
  return (
    <ShippoingOptions>
      <Stack gap={7}>
        <Stack gap={7}>
          <Heading as="h2" size="lg">
            {t("selectAddress")}
          </Heading>
          <AddressSelector addresses={addresses} />
        </Stack>
        <Stack gap={7}>
          <Heading as="h2" size="lg">
            {t("selectPayment")}
          </Heading>
          <PaymentSelector />
        </Stack>
        <Flex gap={7} justifyContent={"flex-end"}>
          <Button colorScheme="green" type="submit" isDisabled={isDisabled}>
            {t("execute")}
          </Button>
        </Flex>
      </Stack>
    </ShippoingOptions>
  );
};

export default AddressAndPayment;
