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

  const handleSearch = async (formData: FormData) => {
    "use server";
    const searchValue = formData.get("search");
    console.log(searchValue);
  };

  return (
    <form action={handleSearch}>
      <InputGroup w={"35vw"}>
        <Input
          name="search"
          backgroundColor={"#1f275d"}
          borderColor={"#1f275d"}
          borderRadius={7}
          placeholder={t("text")}
          variant="outline"
          color={"white"}
          _focus={{ bg: "white", color: "#1f275d" }}
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
