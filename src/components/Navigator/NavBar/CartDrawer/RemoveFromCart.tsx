import {
  HStack,
  Icon,
  useDisclosure,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { CartItemProps } from "./CartItem";
import { useCartContext } from "@/contexts/shoppingCart";

const RemoveFromCart = ({ item }: { item: CartItemProps }) => {
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const { removeFromCart } = useCartContext();

  return (
    <>
      <HStack
        fontWeight={"semibold"}
        fontSize={12}
        gap={1}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Icon as={MdDeleteForever} color={"#6aa84f"} fontSize={15} />
        <Text color={"#999999"}>{t("remove")}</Text>
      </HStack>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t("removeConfirm")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </AlertDialogHeader>
          <AlertDialogBody>{t("removeConfMsg")}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {t("no")}
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                removeFromCart(item);
                onClose();
              }}
            >
              {t("yes")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RemoveFromCart;
