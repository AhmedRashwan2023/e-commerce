import { useCartContext } from "@/contexts/shoppingCart";
import { CartItemProps } from "@/data/types";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

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
          <AlertDialogFooter dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <HStack gap={2}>
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
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RemoveFromCart;
