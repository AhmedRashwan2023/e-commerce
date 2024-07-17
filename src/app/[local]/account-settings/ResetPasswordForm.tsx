"use client";

import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import { handleChangePassword } from "./actions";

const ResetPasswordForm = () => {
  const t = useTranslations("accountSettings");
  const activeLocale = useLocale();
  const toast = useToast();
  const resetPassword = async (formData: FormData) => {
    const data = await handleChangePassword(formData);
    if (!data?.error) {
    }
  };

  return (
    <form action={resetPassword}>
      <HStack width={"80%"}>
        <FormControl>
          <FormLabel fontSize={14} fontWeight={"semibold"}>
            {t("newPass")}
          </FormLabel>
          <Input
            type="password"
            placeholder="**********"
            name="newPass"
            size="md"
            borderWidth={1}
            borderRadius={5}
            mb={3}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={14} fontWeight={"semibold"}>
            {t("currentPass")}
          </FormLabel>
          <Input
            type="password"
            placeholder="**********"
            name="currentPass"
            size="md"
            borderWidth={1}
            borderRadius={5}
            mb={3}
          />
        </FormControl>
      </HStack>
      <Text fontWeight={"semibold"} maxW={350} color={"#818181"} py={4}>
        {t("resetPassText")}
        <Link
          as={NextLink}
          href={`/${activeLocale}/account/signup`}
          color={"#01a915"}
          textDecoration={"none"}
          _hover={{ color: "#048414" }}
        >
          {t("resetPassLink")}
        </Link>
      </Text>
      <Button type="submit" colorScheme="yellow">
        {t("savePassword")}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
