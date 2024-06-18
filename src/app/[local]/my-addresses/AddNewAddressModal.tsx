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
import { useTranslations } from "next-intl";
import React from "react";

const AddNewAddressModal = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("myAddresses");
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
        <ModalContent>
          <ModalHeader>{t("modelTitle")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewAddressModal;
