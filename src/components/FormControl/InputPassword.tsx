"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";

const InputPassword = ({ isRequired }: { isRequired?: boolean }) => {
  const t = useTranslations("signInPage");
  const activeLocale = useLocale();
  const [showPass, setShowPass] = useState(false);
  const ShowPassIcon = !showPass ? FaEye : FaEyeLowVision;

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <InputGroup>
      <Input
        name="password"
        placeholder={t("password")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
        type={showPass ? "text" : "password"}
        isRequired={isRequired}
      />
      {activeLocale === "ar" ? (
        <InputLeftElement
          color={"#5e6c75"}
          onClick={handleShowPass}
          cursor={"pointer"}
        >
          <ShowPassIcon />
        </InputLeftElement>
      ) : (
        <InputRightElement
          color={"#5e6c75"}
          onClick={handleShowPass}
          cursor={"pointer"}
        >
          <ShowPassIcon />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputPassword;
