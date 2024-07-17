import { bodyPadding } from "@/assets/global";
import AccountPagesHeader from "@/components/AccountPagesHeader";
import { Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import SignUpForm from "@/components/Account/SignUpForm";
import { useLocale, useTranslations } from "next-intl";

const SignUp = () => {
  const t = useTranslations("signUpPage");
  const activeLocale = useLocale();

  return (
    <>
      <AccountPagesHeader>
        <HStack fontWeight={"semibold"}>
          <Text>{t("alreadyHaveAcc")}</Text>
          <Link as={NextLink} href={`/${activeLocale}/account/signin`}>
            {t("signInLink")}
          </Link>
        </HStack>
      </AccountPagesHeader>
      <Flex
        px={bodyPadding}
        justifyContent={"space-evenly"}
        py={"5.6rem"}
        wrap={"wrap"}
      >
        <Image alt={""} src="/images/account/signup.svg" boxSize={250} />
        <Flex flexDir={"column"} gap={8} maxW={450}>
          <Flex flexDir={"column"}>
            <Text fontSize={30} fontWeight={"semibold"} color={"rgb(1,17,77)"}>
              {t("title")}
            </Text>
            <Text fontSize={14} fontWeight={"semibold"} color={"#818181"}>
              {t("description")}
            </Text>
          </Flex>
          <SignUpForm />
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
