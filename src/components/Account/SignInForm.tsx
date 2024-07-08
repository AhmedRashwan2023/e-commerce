"use client";
import { Button, HStack, Input, Link, Text, useToast } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import InputPassword from "../FormControl/InputPassword";
import { handleSignIn } from "./action";
import { usePathname, useRouter } from "next/navigation";
import { SignInFormProps } from "@/data/types";

const SignInForm = ({ specialURL }: SignInFormProps) => {
  const activeLocale = useLocale();
  const t = useTranslations("signInPage");
  const toast = useToast();
  const router = useRouter();
  const pathname = usePathname();

  const handleFormAction = async (formData: FormData) => {
    const data = await handleSignIn(formData);
    if (data?.error) {
      toast({
        description: t("signInError"),
        position: activeLocale === "ar" ? "top-left" : "top-right",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    } else {
      if (specialURL) {
        router.push(specialURL);
      } else router.push(pathname);
    }
  };

  return (
    <form action={handleFormAction}>
      <Input
        name="username"
        type="email"
        placeholder={t("email")}
        size="md"
        borderColor={"rgb(1,17,77)"}
        _hover={{ borderColor: "rgb(1,17,77)" }}
        borderWidth={1}
        mb={3}
        // value={"administrateur@optimgov.com"}
      />
      <InputPassword isRequired />
      <HStack fontWeight={"semibold"}>
        <Text color={"#818181"}>{t("forgotPassword")}</Text>
        <Link
          as={NextLink}
          href={`/${activeLocale}/account/reset-password`}
          color={"rgb(1,17,77)"}
        >
          {t("forgotPasswordLink")}
        </Link>
      </HStack>
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
        {t("signInButton")}
      </Button>
      <HStack fontWeight={"semibold"}>
        <Text color={"#818181"}>{t("dontHaveAcc")}</Text>
        <Link
          as={NextLink}
          href={`/${activeLocale}/account/signup`}
          color={"rgb(1,17,77)"}
        >
          {t("registerLink")}
        </Link>
      </HStack>
    </form>
  );
};

export default SignInForm;
