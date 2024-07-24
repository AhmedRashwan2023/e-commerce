"use client";

import { Input, Button, Flex, Text, Link, useToast } from "@chakra-ui/react";
import InputPassword from "../FormControl/InputPassword";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { handleSignIn, handleSignUp } from "./action";
import { usePathname, useRouter } from "next/navigation";

const SignUpForm = () => {
  const t = useTranslations("signUpPage");
  const activeLocale = useLocale();
  const toast = useToast();
  const router = useRouter();

  const handleFormAction = async (formData: FormData) => {
    const data = await handleSignUp(formData);
    if (data?.error) {
      toast({
        description: t("signUpError"),
        position: activeLocale === "ar" ? "top-left" : "top-right",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    } else {
      toast({
        description: t("signUpDone"),
        position: activeLocale === "ar" ? "top-left" : "top-right",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push(`/${activeLocale}`);
    }
  };

  return (
    <form action={handleFormAction}>
      <Input
        mr={activeLocale === "fr" ? 1 : 0}
        name="username"
        placeholder={t("username")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      />
      {/* <Input
        w={"50%"}
        mr={activeLocale === "ar" ? 1 : 0}
        name="lastName"
        placeholder={t("lastName")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      /> */}
      <Input
        name="email"
        type="email"
        placeholder={t("email")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      />
      <Input
        name="phone"
        placeholder={t("phone")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      />
      {/* <Input
        name="address"
        placeholder={t("address")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      />
      <Input
        name="city"
        placeholder={t("city")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      />
      <Input
        name="postCode"
        placeholder={t("postCode")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
      /> */}
      <InputPassword />
      <Button
        type="submit"
        backgroundColor={"rgb(1,17,77)"}
        color={"white"}
        my={3}
        w={"100%"}
        _hover={{
          bg: "white",
          borderColor: "rgb(1,17,77)",
          border: "1px",
          color: "rgb(1,17,77)",
        }}
      >
        {t("signUpButton")}
      </Button>
      <Flex gap={1}>
        <Text color={"#818181"}>{t("termsAndConditionText")}</Text>
        <Link
          // as={NextLink}
          href={`/front_office/${activeLocale}/account/signup`}
          color={"#cdad00"}
          textDecoration={"none"}
          _hover={{ color: "#01a915" }}
        >
          {t("termsOfServicesLink")}
        </Link>
        <Text color={"#818181"}>&</Text>
        <Link
          // as={NextLink}
          href={`/front_office/${activeLocale}/account/signup`}
          color={"#cdad00"}
          textDecoration={"none"}
          _hover={{ color: "#01a915" }}
        >
          {t("privacyPolicy")}
        </Link>
      </Flex>
    </form>
  );
};

export default SignUpForm;
