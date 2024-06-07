"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const localActive = useLocale();
  const t = useTranslations("SearchInput");
  const ref = React.useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <InputGroup w={"35vw"}>
        <Input
          backgroundColor={isFocused ? "white" : "#1f275d"}
          borderColor={"#1f275d"}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          borderRadius={7}
          placeholder={t("text")}
          variant="outline"
          ref={ref}
          color={!isFocused ? "white" : "#1f275d"}
        />
        {localActive === "ar" ? (
          <InputLeftElement color={"#5e6c75"}>
            <BsSearch />
          </InputLeftElement>
        ) : (
          <InputRightElement color={"#5e6c75"}>
            <BsSearch />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
