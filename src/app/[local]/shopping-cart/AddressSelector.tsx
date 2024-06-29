"use client";
import React, { useState } from "react";
import { Flex, Radio, RadioGroup, Stack, Text, Box } from "@chakra-ui/react";
import { AddressProps } from "../my-addresses/AddressCard";

const AddressSelector = ({ addresses }: { addresses: AddressProps[] }) => {
  const [value, setValue] = useState("1");
  const [selectedAddress, setSelectedAddress] = useState<AddressProps | null>(
    null
  );

  const handleSelectAddress = (address: AddressProps) => {
    setSelectedAddress(address);
  };

  return (
    <RadioGroup onChange={setValue} value={value} name="address">
      <Stack>
        {addresses.map((address, index) => (
          <RadioWrapper
            key={address.id} // Remember to add a unique key prop when mapping elements
            address={address}
            isSelected={address === selectedAddress}
            onSelect={handleSelectAddress}
          />
        ))}
      </Stack>
    </RadioGroup>
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
            <Text>{address.address1}</Text>
            <Text>{address.phone}</Text>
          </Box>
        </Stack>
      </Radio>
    </Flex>
  );
};
