import { signIn } from "@/services/auth";
import { Button, HStack, Input, Link, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import InputPassword from "../FormControl/InputPassword";
import NextLink from "next/link";

const SignInForm = () => {
  const activeLocale = useLocale();
  const t = useTranslations("signInPage");

  const handleFormAction = async (formData: FormData) => {
    "use server";
    await signIn(formData);
    redirect(`/${activeLocale}`);
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
      />
      <InputPassword />
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