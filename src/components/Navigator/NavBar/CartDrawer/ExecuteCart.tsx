"use client";
import { Button, Flex, Link } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { IoCheckmarkCircle } from "react-icons/io5";
import RemoveAllItemsBtn from "./RemoveAllItemsBtn";
import NextLink from "next/link";

const ExecuteCart = ({ onClose }: { onClose?: () => void }) => {
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();

  return (
    <Flex w={"100%"} justifyContent={"flex-end"} gap={2}>
      <RemoveAllItemsBtn />
      <Link as={NextLink} href={`/${localeActive}/shopping-cart`}>
        <Button
          colorScheme="green"
          size="sm"
          leftIcon={<IoCheckmarkCircle />}
          type={"submit"}
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          {t("execute")}
        </Button>
      </Link>
    </Flex>
  );
};

export default ExecuteCart;
