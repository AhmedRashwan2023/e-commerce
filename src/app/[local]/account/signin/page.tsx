import { bodyPadding } from "@/assets/global";
import AccountPagesHeader from "@/components/AccountPagesHeader";
import InputPassword from "@/components/FormControl/InputPassword";
import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { signIn } from "@/services/auth";
import { redirect } from "next/navigation";

const SignIn = () => {
  const t = useTranslations("signInPage");
  const activeLocale = useLocale();

  const handleFormAction = async (formData: FormData) => {
    "use server";
    await signIn(formData);
    redirect(`/${activeLocale}`);
  };

  return (
    <>
      <AccountPagesHeader>
        <HStack fontWeight={"semibold"}>
          <Text>{t("dontHaveAcc")}</Text>
          <Link as={NextLink} href={`/${activeLocale}/account/signup`}>
            {t("registerLink")}
          </Link>
        </HStack>
      </AccountPagesHeader>
      <Flex
        px={bodyPadding}
        justifyContent={"space-evenly"}
        py={"5.6rem"}
        wrap={"wrap"}
      >
        <Image alt={""} src="/images/account/signin.svg" boxSize={250} />
        <Flex flexDir={"column"} gap={8}>
          <Flex flexDir={"column"}>
            <Text fontSize={30} fontWeight={"semibold"} color={"rgb(1,17,77)"}>
              {t("title")}
            </Text>
            <Text fontSize={14} fontWeight={"semibold"} color={"#818181"}>
              {t("description")}
            </Text>
          </Flex>
          <form action={handleFormAction}>
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
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
