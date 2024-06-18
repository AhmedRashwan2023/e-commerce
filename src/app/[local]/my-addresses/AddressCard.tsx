import { Box, Button, Flex, Show, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";
import ModifyAddressModal from "./ModifyAddressModal";
import AddressForm from "./AddressForm/AddressForm";

interface Props {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    phone: string;
    postCode: string;
    businessName: string;
    setAsDefault: boolean;
  };
}

const AddressCard = ({ data }: Props) => {
  const t = useTranslations("myAddresses");

  const setAddressAsDefault = async () => {
    "use server";
    console.log(`Set ${data.id}`);
  };

  const deleteAddress = async () => {
    "use server";
    console.log(`Deleted ${data.id}`);
  };

  return (
    <Stack
      w={{ sm: "100%", xl: 248 }}
      borderWidth={1}
      borderColor={"#B0B0B0"}
      borderRadius={7}
      px={6}
      py={4}
      fontWeight={"semibold"}
      fontSize={"medium"}
      gap={5}
    >
      <Text>{data.firstName}</Text>
      <Box color={"#B0B0B0"}>
        <Text>{data.lastName}</Text>
        <Text>{data.address1}</Text>
        <Text>{data.address2}</Text>
        <Text>{data.phone}</Text>
      </Box>
      {data.setAsDefault ? (
        <Text color={"#f1c232"}>{t("defaultAddress")}</Text>
      ) : (
        <form action={setAddressAsDefault}>
          <Button type="submit" size="sm" colorScheme="blue">
            {t("setAsDefault")}
          </Button>
        </form>
      )}
      <Flex justifyContent={"space-between"}>
        <ModifyAddressModal>
          <AddressForm initialValues={data} />
        </ModifyAddressModal>
        <form action={deleteAddress}>
          <Button type="submit" size="sm" colorScheme="red">
            {t("delete")}
          </Button>
        </form>
      </Flex>
    </Stack>
  );
};

export default AddressCard;