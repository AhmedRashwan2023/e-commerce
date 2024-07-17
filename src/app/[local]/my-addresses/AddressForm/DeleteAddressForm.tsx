"use client";

import { Button, useToast } from "@chakra-ui/react";
import { handleDeleteAddress } from "./action";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const DeleteAddressForm = ({ id }: { id: number }) => {
  const t = useTranslations("myAddresses");
  const toast = useToast();
  const router = useRouter();

  const deleteAddress = async () => {
    const data = await handleDeleteAddress(id);
    if (!data?.error) {
      toast({
        description: `${t("errorDeleting")}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        description: `${t("successDeleting")}`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.refresh();
    }
  };

  return (
    <form action={deleteAddress}>
      <Button type="submit" size="sm" colorScheme="red">
        {t("delete")}
      </Button>
    </form>
  );
};

export default DeleteAddressForm;
