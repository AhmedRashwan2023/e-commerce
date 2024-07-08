import { ItemProps } from "@/data/types";
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

const RemoveFromWishList = ({ item }: { item: ItemProps }) => {
  const t = useTranslations("wishlist");
  const localeActive = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const { removeFromWishlist } = useWishlistContext();
  return (
    <>
      <HStack
        fontWeight={"semibold"}
        fontSize={14}
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
              <Text>{t("confirmRemovingItemTitle")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </AlertDialogHeader>
          <AlertDialogBody>{t("removeItemConf")}</AlertDialogBody>
          <AlertDialogFooter dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <HStack gap={2}>
              <Button ref={cancelRef} onClick={onClose}>
                {t("no")}
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  removeFromWishlist(item);
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

export default RemoveFromWishList;
