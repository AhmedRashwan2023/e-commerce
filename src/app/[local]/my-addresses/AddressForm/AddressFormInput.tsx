"use client";
import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  value?: string | number;
  name: string;
  placeholder: string;
  required?: boolean;
}
const AddressFormInput = ({ value, name, placeholder, required }: Props) => {
  const [inputValue, setValue] = React.useState(value);
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <Input
      ref={ref}
      name={name}
      required={required}
      placeholder={placeholder}
      size="md"
      borderColor={"rgb(1,17,77)"}
      _hover={{ borderColor: "rgb(1,17,77)" }}
      borderWidth={1}
      value={inputValue}
      mb={3}
      onChange={() => {
        if (ref.current) {
          setValue(ref.current.value);
        }
      }}
    />
  );
};

export default AddressFormInput;
