import MyAccountLayout from "@/components/MyAccountLayout";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import React from "react";
import AddNewAddressModal from "./AddNewAddressModal";
import AddressForm from "./AddressForm/AddressForm";
import AddressCard from "./AddressCard";
import { addresses } from "@/data/addresses";
const MyAddresses = async () => {
  const t = await getTranslations("myAddresses");
  return (
    <MyAccountLayout>
      <Box w={"40vw"}>
        <Flex justifyContent={"space-between"} pb={10}>
          <Heading as="h2" size="lg">
            {t("title")}
          </Heading>
          <AddNewAddressModal>
            <AddressForm />
          </AddNewAddressModal>
        </Flex>
        <Flex flexWrap={"wrap"} gap={3}>
          {addresses.map((address, index) => (
            <AddressCard key={index} data={address} />
          ))}
        </Flex>
      </Box>
    </MyAccountLayout>
  );
};

export default MyAddresses;
