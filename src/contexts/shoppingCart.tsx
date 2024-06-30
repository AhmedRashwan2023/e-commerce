"use client";
import { CartItemProps } from "@/components/Navigator/NavBar/CartDrawer/CartItem";
import { useToast } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext<any>([]);

export const CartWrapper = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const toast = useToast();
  const t = useTranslations("shoppingCart");

  useEffect(() => {
    try {
      let storedCartItems: CartItemProps[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith("cart_")) {
          const item = localStorage.getItem(key);
          if (item) {
            storedCartItems.push(JSON.parse(item));
          }
        }
      }

      setCartItems(storedCartItems);
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [t, toast]);
  const addToCart = (item: CartItemProps) => {
    try {
      const foundItem = cartItems.find((i: CartItemProps) => i.id === item.id);
      let newCart: CartItemProps[] = [];

      if (foundItem) {
        newCart = cartItems.map((i: CartItemProps) =>
          i.id === foundItem.id
            ? {
                ...i,
                qty: i.qty + 1,
                totalSellingPrice: i.sellingPrice * (i.qty + 1),
                totalNormalPrice: i.normalPrice * (i.qty + 1),
              }
            : i
        );
      } else {
        newCart = [
          ...cartItems,
          {
            ...item,
            qty: 1,
            totalSellingPrice: item.sellingPrice,
            totalNormalPrice: item.normalPrice,
          },
        ];
      }

      setCartItems(newCart);

      newCart.forEach((cartItem) => {
        localStorage.setItem(`cart_${cartItem.id}`, JSON.stringify(cartItem));
      });

      toast({
        description: `${t("itemAdded")}`,
        // position: "top-left",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeFromCart = (item: CartItemProps) => {
    try {
      const remainingItems = cartItems.filter(
        (i: CartItemProps) => i.id !== item.id
      );

      setCartItems(remainingItems);

      localStorage.removeItem(`cart_${item.id}`);

      toast({
        description: `${t("itemRemoved")}`,
        // position: "top-left",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const addQty = (id: number) => {
    try {
      const foundItem = cartItems.find((i: CartItemProps) => i.id === id);

      if (foundItem) {
        const newCart = cartItems.map((i: CartItemProps) =>
          i.id === id
            ? {
                ...i,
                qty: i.qty + 1,
                totalSellingPrice: i.sellingPrice * (i.qty + 1),
                totalNormalPrice: i.normalPrice * (i.qty + 1),
              }
            : i
        );

        setCartItems(newCart);

        newCart.forEach((cartItem) => {
          localStorage.setItem(`cart_${cartItem.id}`, JSON.stringify(cartItem));
        });

        toast({
          description: `${t("qtyUpdated")}`,
          // position: "top-left",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const decreseQty = (id: number) => {
    try {
      const foundItem = cartItems.find((i: CartItemProps) => i.id === id);

      if (foundItem && foundItem.qty > 1) {
        const newCart = cartItems.map((i: CartItemProps) =>
          i.id === id
            ? {
                ...i,
                qty: i.qty - 1,
                totalSellingPrice: i.sellingPrice * (i.qty - 1),
                totalNormalPrice: i.normalPrice * (i.qty - 1),
              }
            : i
        );

        setCartItems(newCart);

        newCart.forEach((cartItem) => {
          localStorage.setItem(`cart_${cartItem.id}`, JSON.stringify(cartItem));
        });

        toast({
          description: `${t("qtyUpdated")}`,
          // position: "top-left",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeAllItems = () => {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith("cart_")) {
          localStorage.removeItem(key);
        }
      }

      setCartItems([]);

      toast({
        description: `${t("allItemsRemoved")}`,
        // position: "top-left",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        // position: "top-left",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addQty,
        decreseQty,
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
