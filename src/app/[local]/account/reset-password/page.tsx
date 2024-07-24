import { bodyPadding } from "@/assets/global";
import AccountPagesHeader from "@/components/AccountPagesHeader";
import {
  HStack,
  Text,
  Link,
  Image,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";

const ResetPassword = () => {
  const t = useTranslations("resetPasswordPage");
  const activeLocale = useLocale();

  const handleFormAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    console.log(email);
  };

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
        <Image alt={""} src="/front_office/images/account/fp.svg" boxSize={250} />
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
              name="email"
              type="email"
              placeholder={t("email")}
              size="md"
              borderColor={"rgb(1,17,77)"}
              _hover={{ borderColor: "rgb(1,17,77)" }}
              borderWidth={1}
              mb={3}
            />
            <Button
              type="submit"
              backgroundColor={"rgb(1,17,77)"}
              color={"white"}
              w={"100%"}
              _hover={{
                bg: "white",
                borderColor: "rgb(1,17,77)",
                border: "1px",
                color: "rgb(1,17,77)",
              }}
              mb={3}
            >
              {t("resetPasswordButton")}
            </Button>
            <Link // as={NextLink}
             href={`/front_office/${activeLocale}/account/signup`}>
              <Button color={"rgb(1,17,77)"} w={"100%"}>
                {t("goBack")}
              </Button>
            </Link>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default ResetPassword;
