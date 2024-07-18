"use client";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useTranslations, useLocale } from "next-intl";
import { handleUpdateData } from "./actions";

const UpdateUserData = () => {
  const t = useTranslations("accountSettings");
  const toast = useToast();

  const handleDetails = async (formData: FormData) => {
    const data = await handleUpdateData(formData);
    if (!data?.error) {
      toast({
        description: `${t("updateProfileError")}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        description: `${t("updateProfileSuccess")}`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <form action={handleDetails}>
      <FormControl>
        <FormLabel fontSize={14} fontWeight={"semibold"}>
          {t("name")}
        </FormLabel>
        <Input name="name" size="md" borderWidth={1} borderRadius={5} mb={3} />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={14} fontWeight={"semibold"}>
          {t("email")}
        </FormLabel>
        <Input
          name="email"
          type="email"
          size="md"
          borderWidth={1}
          borderRadius={5}
          mb={3}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={14} fontWeight={"semibold"}>
          {t("phone")}
        </FormLabel>
        <Input name="phone" size="md" borderWidth={1} borderRadius={5} mb={3} />
      </FormControl>
      <Button type="submit" colorScheme="yellow">
        {t("saveDetails")}
      </Button>
    </form>
  );
};

export default UpdateUserData;
