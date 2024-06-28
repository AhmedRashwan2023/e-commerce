import { useCartContext } from "@/contexts/shoppingCart";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Link,
  useDisclosure,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const RemoveAllItemsBtn = () => {
  const t = useTranslations("shoppingCart");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeAllItems } = useCartContext();

  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const localeActive = useLocale();

  return (
    <>
      <Button
        colorScheme="red"
        size="sm"
        leftIcon={<MdDeleteForever />}
        onClick={onOpen}
      >
        {t("removeAll")}
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
              <Text>{t("removeConfirm")}</Text>
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
                  removeAllItems();
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

export default RemoveAllItemsBtn;
