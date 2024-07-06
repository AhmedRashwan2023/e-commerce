import { ItemProps } from "@/components/ShoppingItems/ItemCard";
import { useWishlistContext } from "@/contexts/wishlistContext";
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
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useTranslations, useLocale } from "next-intl";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const RemoveAllFromWishList = () => {
  const t = useTranslations("wishlist");
  const localeActive = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const { removeAllFromWishlist } = useWishlistContext();
  return (
    <>
      <Button
        colorScheme="red"
        size="sm"
        leftIcon={<MdDeleteForever />}
        onClick={onOpen}
      >
        {t("removeAllText")}
      </Button>

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
              <Text>{t("confirmRemovingAllTitle")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </AlertDialogHeader>
          <AlertDialogBody>{t("removeAllConf")}</AlertDialogBody>
          <AlertDialogFooter dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <HStack gap={2}>
              <Button ref={cancelRef} onClick={onClose}>
                {t("no")}
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  removeAllFromWishlist();
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

export default RemoveAllFromWishList;
