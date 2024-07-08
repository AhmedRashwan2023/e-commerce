"use client";
import { AddressFormCheckboxProps } from "@/data/types";
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";

const AddressFormCheckbox = ({ value, text }: AddressFormCheckboxProps) => {
  const [inputValue, setValue] = useState(value);

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
