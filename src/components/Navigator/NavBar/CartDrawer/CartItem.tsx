import { useCartContext } from "@/contexts/shoppingCart";
import { Button, Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import RemoveFromCart from "./RemoveFromCart";

export interface CartItemProps {
  id: number;
  name: string;
  image: string;
  qty: number;
  normalPrice: number;
  sellingPrice: number;
  totalNormalPrice: number;
  totalSellingPrice: number;
}
const CartItem = ({ item }: { item: CartItemProps }) => {
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();
  const { addQty, decreseQty } = useCartContext();

  const direction = localeActive === "ar" ? "rtl" : "ltr";
  const isSale = item.totalNormalPrice > item.totalSellingPrice ? true : false;

  return (
    <Stack dir={direction}>
      <HStack w={"100%"} justifyContent={"space-between"}>
        <HStack>
          <Image src={item.image} alt="cart-item-image" boxSize={"80px"} />
          <Stack gap={0}>
            <Text fontWeight={"semibold"} fontSize={14}>
              {item.name}
            </Text>
            <RemoveFromCart item={item} />
          </Stack>
        </HStack>
        <HStack gap={5}>
          <HStack>
            <Button
              px={1}
              bg={"white"}
              _hover={{ bg: "white" }}
              fontSize={25}
              cursor={"pointer"}
              onClick={() => addQty(item.id)}
            >
              <CiSquarePlus />
            </Button>
            <Text>{item.qty}</Text>
            <Button
              px={1}
              bg={"white"}
              _hover={{ bg: "white" }}
              fontSize={25}
              cursor={"pointer"}
              onClick={() => {
                if (item.qty > 1) decreseQty(item.id);
              }}
            >
              <CiSquareMinus />
            </Button>
          </HStack>
          <Stack fontSize={16} fontWeight={"semibold"} gap={0}>
            {isSale && (
              <Text>{`${item.totalSellingPrice} ${t("currency")}`}</Text>
            )}
            <Text
              color={isSale ? "#9c9c9c" : "black"}
              textDecoration={isSale ? "line-through" : "none"}
            >{`${item.totalNormalPrice} ${t("currency")}`}</Text>
          </Stack>
        </HStack>
      </HStack>
      <Divider />
    </Stack>
  );
};

export default CartItem;
