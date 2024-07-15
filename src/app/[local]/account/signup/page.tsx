import { bodyPadding } from "@/assets/global";
import AccountPagesHeader from "@/components/AccountPagesHeader";
import InputPassword from "@/components/FormControl/InputPassword";
import {
  HStack,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useLocale, useTranslations } from "next-intl";

const SignUp = () => {
  const t = useTranslations("signUpPage");
  const activeLocale = useLocale();

  const handleFormAction = async (formData: FormData) => {
    "use server";
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const postCode = formData.get("postCode") as string;
    const password = formData.get("password") as string;
    console.log(
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postCode,
      password
    );
  };

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
          <form action={handleFormAction}>
            <Input
              w={"49%"}
              mr={activeLocale === "fr" ? 1 : 0}
              name="firstName"
              placeholder={t("firstName")}
              size="md"
              borderColor={"rgb(1,17,77)"}
              _hover={{ borderColor: "rgb(1,17,77)" }}
              borderWidth={1}
              mb={3}
            />
            <Input
              w={"50%"}
              mr={activeLocale === "ar" ? 1 : 0}
              name="lastName"
              placeholder={t("lastName")}
              size="md"
              borderColor={"rgb(1,17,77)"}
              _hover={{ borderColor: "rgb(1,17,77)" }}
              borderWidth={1}
              mb={3}
            />
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
            <Input
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
            />
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
                as={NextLink}
                href={`/${activeLocale}/account/signup`}
                color={"#cdad00"}
                textDecoration={"none"}
                _hover={{ color: "#01a915" }}
              >
                {t("termsOfServicesLink")}
              </Link>
              <Text color={"#818181"}>&</Text>
              <Link
                as={NextLink}
                href={`/${activeLocale}/account/signup`}
                color={"#cdad00"}
                textDecoration={"none"}
                _hover={{ color: "#01a915" }}
              >
                {t("privacyPolicy")}
              </Link>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
