import MyAccountLayout from "@/components/MyAccountLayout";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import AddNewAddressModal from "./AddNewAddressModal";
import AddressForm from "./AddressForm/AddressForm";
import AddressCard from "./AddressCard";
import { addresses } from "@/data/addresses";
import AddressCardContainer from "./AddressCardContainer";
import { getSession } from "@/services/auth";
import { AddressProps } from "@/data/types";
import { postRequest } from "@/utils/db";

const MyAddresses = async () => {
  const session = await getSession();

  const addresses = await postRequest(
    "/api/addresses/client/1",
    {},
    session.data.access_token
  );

  const t = await getTranslations("myAddresses");
  return (
    <MyAccountLayout>
      <Box>
        <Flex justifyContent={"space-between"} pb={10}>
          <Heading as="h2" size="lg">
            {t("title")}
          </Heading>
          <AddNewAddressModal />
        </Flex>
        <SimpleGrid columns={{ sm: 1, md: 2, "2xl": 3 }} spacing={6}>
          {addresses.map((address: AddressProps, index: number) => (
            <AddressCardContainer key={index}>
              <AddressCard data={address} />
            </AddressCardContainer>
          ))}
        </SimpleGrid>
      </Box>
    </MyAccountLayout>
  );
};

export default MyAddresses;
