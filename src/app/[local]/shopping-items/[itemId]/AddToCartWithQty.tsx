"use client";

import { useCartContext } from "@/contexts/shoppingCart";
import { ItemProps } from "@/data/types";
import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartWithQty = ({ item }: { item: ItemProps }) => {
  const t = useTranslations("shoppingItems");
  const { addToCartWithQty } = useCartContext();

  const handleAddToCart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const qty = formData.get("qty");
    addToCartWithQty(item, Number(qty));
  };

  return (
    <form onSubmit={handleAddToCart}>
      <Flex gap={3} flexDirection={"column"} w={"fit-content"}>
        <NumberInput defaultValue={1} min={1} max={30} w={100}>
          <NumberInputField textAlign={"center"} name="qty" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button
          w={200}
          leftIcon={<MdOutlineAddShoppingCart />}
          type="submit"
          backgroundColor={"#01114d"}
          color={"white"}
          _hover={{ bg: "#01114d", color: "white" }}
        >
          {t("addToCard")}
        </Button>
      </Flex>
    </form>
  );
};

export default AddToCartWithQty;
