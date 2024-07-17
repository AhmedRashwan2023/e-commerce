"use client";
import { useCartContext } from "@/contexts/shoppingCart";
import { ReactNode } from "react";
import { executeCart } from "./action";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const ShippoingOptions = ({ children }: { children: ReactNode }) => {
  const { cartItems, setCartItems } = useCartContext();
  const toast = useToast();
  const router = useRouter();
  const localeActive = useLocale();

  const handleCart = async (formData: FormData) => {
    const data = await executeCart(formData, cartItems);
    console.log("data from create orders", data);
    if (data?.error) {
      toast({
        description: `Error making order`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      setCartItems([]);
      toast({
        description: `Your order has been created`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push(`/${localeActive}`);
    }
  };

  return cartItems.length > 0 && <form action={handleCart}>{children}</form>;
};

export default ShippoingOptions;
