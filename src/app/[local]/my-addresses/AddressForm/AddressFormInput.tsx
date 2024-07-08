"use client";
import { AddressFormInputProps } from "@/data/types";
import { Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

const AddressFormInput = ({
  value,
  name,
  placeholder,
  required,
}: AddressFormInputProps) => {
  const [inputValue, setValue] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

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
