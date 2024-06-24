import MyAccountLayout from "@/components/MyAccountLayout";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import AddNewAddressModal from "./AddNewAddressModal";
import AddressForm from "./AddressForm/AddressForm";
import AddressCard from "./AddressCard";
import { addresses } from "@/data/addresses";
import AddressCardContainer from "./AddressCardContainer";

const MyAddresses = async () => {
  const t = await getTranslations("myAddresses");
  return (
    <MyAccountLayout>
      <Box>
        <Flex justifyContent={"space-between"} pb={10}>
          <Heading as="h2" size="lg">
            {t("title")}
          </Heading>
          <AddNewAddressModal>
            <AddressForm />
          </AddNewAddressModal>
        </Flex>
        <SimpleGrid columns={{ sm: 1, md: 2, "2xl": 3 }} spacing={6}>
          {addresses.map((address, index) => (
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
