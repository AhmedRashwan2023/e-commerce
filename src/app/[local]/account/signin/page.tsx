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
import SignInForm from "@/components/Account/SignInForm";

const SignIn = () => {
  const t = useTranslations("signInPage");
  const activeLocale = useLocale();

  return (
    <>
      <AccountPagesHeader>
        <HStack fontWeight={"semibold"}>
          <Text>{t("dontHaveAcc")}</Text>
          <Link 
          // as={NextLink} 
          href={`/front_office/${activeLocale}/account/signup`}>
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
        <Image alt={""} src="/front_office/images/account/signin.svg" boxSize={250} />
        <Flex flexDir={"column"} gap={8}>
          <Flex flexDir={"column"}>
            <Text fontSize={30} fontWeight={"semibold"} color={"rgb(1,17,77)"}>
              {t("title")}
            </Text>
            <Text fontSize={14} fontWeight={"semibold"} color={"#818181"}>
              {t("description")}
            </Text>
          </Flex>
          <SignInForm specialURL={`/${activeLocale}`} />
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
