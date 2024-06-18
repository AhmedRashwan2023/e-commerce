"use client";
import { Checkbox } from "@chakra-ui/react";
import React from "react";

interface Props {
  value: boolean;
  text: string;
}

const AddressFormCheckbox = ({ value, text }: Props) => {
  const [inputValue, setValue] = React.useState(value);

  return (
    <Checkbox
      name="setAsDefault"
      w={"100%"}
      colorScheme="green"
      defaultChecked={inputValue}
      onChange={(e) => {
        setValue(e.target.checked);
      }}
    >
      {text}
    </Checkbox>
  );
};

export default AddressFormCheckbox;
