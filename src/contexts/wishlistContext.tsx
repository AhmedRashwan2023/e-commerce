"use client";

import { WishlistItemsProps } from "@/data/types";
import { useToast } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext<any>([]);

export const WishlistWrapper = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItemsProps[]>([]);
  const toast = useToast();
  const t = useTranslations("wishlist");

  useEffect(() => {
    try {
      let storedWishlistItems: WishlistItemsProps[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith("wishlist_")) {
          const item = localStorage.getItem(key);
          if (item) {
            storedWishlistItems.push(JSON.parse(item));
          }
        }
      }

      setWishlistItems(storedWishlistItems);
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [t, toast]);

  const addToWishlist = (item: WishlistItemsProps) => {
    try {
      const newWishlist = [...wishlistItems, item];
      setWishlistItems(newWishlist);

      localStorage.setItem(`wishlist_${item.id}`, JSON.stringify(item));

      toast({
        description: `${t("itemAdded")}`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeFromWishlist = (item: WishlistItemsProps) => {
    try {
      const remainingItems = wishlistItems.filter((i) => i.id !== item.id);
      setWishlistItems(remainingItems);

      localStorage.removeItem(`wishlist_${item.id}`);

      toast({
        description: `${t("itemRemoved")}`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeAllFromWishlist = () => {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith("wishlist_")) {
          localStorage.removeItem(key);
        }
      }

      setWishlistItems([]);

      toast({
        description: `${t("allItemsRemoved")}`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        description: `${t("errorOccurred")}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        removeAllFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
