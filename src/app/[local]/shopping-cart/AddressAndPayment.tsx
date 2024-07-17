import { Stack, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import ShippoingOptions from "./ShippoingOptions";
import AddressSelector from "./AddressSelector";
import PaymentSelector from "./PaymentSelector";
import { postRequest } from "@/utils/db";
import { getSession } from "@/services/auth";

const AddressAndPayment = async () => {
  const t = await getTranslations("shoppingCart");
  const session = await getSession();
  const addresses = await postRequest(
    `/api/addresses/client/${session.data.id}`,
    {},
    session.data.access_token
  );

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
