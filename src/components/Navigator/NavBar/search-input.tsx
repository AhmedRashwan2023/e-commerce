"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const localActive = useLocale();
  const t = useTranslations("SearchInput");
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("name", value);
        router.push(`/${localActive}/shopping-items?${params.toString()}`);
      }}
    >
      <InputGroup w={"35vw"}>
        <Input
          name="search"
          value={value}
          backgroundColor={"#1f275d"}
          borderColor={"#1f275d"}
          borderRadius={7}
          placeholder={t("text")}
          variant="outline"
          color={"white"}
          _focus={{ bg: "white", color: "#1f275d" }}
          onChange={(e) => setValue(e.target.value)}
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
