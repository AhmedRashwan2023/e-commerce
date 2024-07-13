"use client";
import React, { useState } from "react";
import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Box,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { AddressProps } from "@/data/types";

const AddressSelector = ({ addresses }: { addresses: AddressProps[] }) => {
  console.log("addresses", addresses.length);
  const [value, setValue] = useState("1");
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();
  const [selectedAddress, setSelectedAddress] = useState<AddressProps | null>(
    null
  );

  const handleSelectAddress = (address: AddressProps) => {
    setSelectedAddress(address);
  };

  return (
    <>
      {addresses.length > 0 ? (
        <RadioGroup
          onChange={setValue}
          value={addresses[0].id.toString()}
          name="address"
        >
          <Stack>
            {addresses.map((address, index) => (
              <RadioWrapper
                key={address.id}
                address={address}
                isSelected={address === selectedAddress}
                onSelect={handleSelectAddress}
              />
            ))}
          </Stack>
        </RadioGroup>
      ) : (
        <Alert status="warning" borderRadius={6}>
          <AlertIcon />
          <Text fontSize={15}>
            {t("addAddressText")}&nbsp;
            <Link
              as={NextLink}
              href={`/${localeActive}/my-addresses`}
              textDecoration={"underline !important"}
            >
              {t("addAddressLink")}
            </Link>
          </Text>
        </Alert>
      )}
    </>
  );
};

export default AddressSelector;

const RadioWrapper = ({
  address,
  isSelected,
  onSelect,
}: {
  address: AddressProps;
  isSelected: boolean;
  onSelect: (address: AddressProps) => void;
}) => {
  return (
    <Flex
      borderWidth={1}
      borderColor={isSelected ? "#38761d" : "#eeeeee"}
      borderRadius={7}
      onClick={() => onSelect(address)}
      cursor="pointer"
      px={5}
      py={2}
    >
      <Radio value={address.id.toString()}>
        <Stack px={5}>
          <Text>{address.firstName}</Text>
          <Box color={"#B0B0B0"}>
            <Text>{address.firstAddress}</Text>
            <Text>{address.phone}</Text>
          </Box>
        </Stack>
      </Radio>
    </Flex>
  );
};
