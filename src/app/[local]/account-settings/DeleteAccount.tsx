"use client";

import { Button, useToast } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { handleDeleteAccount } from "./actions";
import { useRouter } from "next/navigation";

const DeleteAccount = () => {
  const t = useTranslations("accountSettings");
  const localeActive = useLocale();
  const toast = useToast();
  const router = useRouter();

  const deleteAccountAction = async () => {
    const data = await handleDeleteAccount();
    if (!data?.error) {
      toast({
        description: `${t("deleteAccountError")}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        description: `${t("deleteAccountSuccess")}`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push(`/${localeActive}`);
    }
  };

  return (
    <form action={deleteAccountAction}>
      <Button
        colorScheme="red"
        w={"fit-content"}
        variant="outline"
        type="submit"
      >
        {t("deleteAccAction")}
      </Button>
    </form>
  );
};

export default DeleteAccount;
