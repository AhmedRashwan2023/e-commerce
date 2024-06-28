import { useCartContext } from "@/contexts/shoppingCart";
import { Button, Flex } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { IoCheckmarkCircle } from "react-icons/io5";
import { handleExecuteCart } from "./action";
import RemoveAllItemsBtn from "./RemoveAllItemsBtn";

const ExecuteCartForm = () => {
  const { cartItems } = useCartContext();
  const t = useTranslations("shoppingCart");

  const handleAction = async () => {
    await handleExecuteCart(cartItems);
  };

  return (
    <form action={handleAction}>
      <Flex w={"100%"} justifyContent={"flex-end"} gap={2}>
        <RemoveAllItemsBtn />
        <Button
          colorScheme="green"
          size="sm"
          leftIcon={<IoCheckmarkCircle />}
          type={"submit"}
        >
          {t("execute")}
        </Button>
      </Flex>
    </form>
  );
};

export default ExecuteCartForm;
