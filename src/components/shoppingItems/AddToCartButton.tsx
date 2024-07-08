"use client";

import { useCartContext } from "@/contexts/shoppingCart";
import { ItemProps } from "@/data/types";
import { Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";
import { FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ item }: { item: ItemProps }) => {
  const t = useTranslations("shoppingItems");
  const { addToCart } = useCartContext();

  const handleAddToCart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToCart(item);
  };

  return (
    <form onSubmit={handleAddToCart}>
      <Button
        leftIcon={<FaPlus />}
        size="sm"
        type="submit"
        backgroundColor={"#01114d"}
        color={"white"}
        _hover={{ bg: "#01114d", color: "white" }}
      >
        {t("addToCard")}
      </Button>
    </form>
  );
};

export default AddToCartButton;
