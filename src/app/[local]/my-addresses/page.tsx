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
  console.log(session.data.id);
  const addresses = await postRequest(
    `/api/addresses/client/${session.data.id}`,
    {},
    // session.data.access_token
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdGV1ckBvcHRpbWdvdi5jb20iLCJpcC1hZGRyZXNzIjoiMTAuMC4wLjEiLCJleHAiOjE3MjEyNTExNzksImlhdCI6MTcyMTE2NDc3OSwidXNlci1hZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuNDAuMCJ9.TalBgipfHhwM7k_d_TdqR1iymnVkJY2zOFiAPsAp7vg"
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
