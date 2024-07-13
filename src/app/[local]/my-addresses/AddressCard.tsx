import { Box, Button, Card, Flex, Show, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import ModifyAddressModal from "./ModifyAddressModal";
import AddressForm from "./AddressForm/AddressForm";
import { AddressProps } from "@/data/types";

const AddressCard = ({ data }: { data: AddressProps }) => {
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
    <Card overflow="hidden" variant="outline">
      <Stack
        // borderWidth={1}
        // borderColor={"#B0B0B0"}
        // borderRadius={7}
        px={6}
        py={4}
        fontWeight={"semibold"}
        fontSize={"medium"}
        gap={3}
      >
        <Text>{data.firstName}</Text>
        <Box color={"#B0B0B0"}>
          <Text>{data.lastName}</Text>
          <Text>{data.firstAddress}</Text>
          <Text>{data.secondAddress}</Text>
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
          <ModifyAddressModal initialValues={data} />

          <form action={deleteAddress}>
            <Button type="submit" size="sm" colorScheme="red">
              {t("delete")}
            </Button>
          </form>
        </Flex>
      </Stack>
    </Card>
  );
};

export default AddressCard;
