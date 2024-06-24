"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode } from "react";

const AddNewAddressModal = ({ children }: { children: ReactNode }) => {
  const t = useTranslations("myAddresses");
  const localeActive = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor={"white"}
        borderColor={"black"}
        borderWidth={1}
        _hover={{ bg: "#01114d", color: "white" }}
      >
        {t("addNewModel")}
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent dir={localeActive === "ar" ? "rtl" : "ltr"}>
          <ModalHeader>{t("modelTitle")}</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewAddressModal;
