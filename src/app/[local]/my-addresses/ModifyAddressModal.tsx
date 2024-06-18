"use client";
import {
  Button,
  Link,
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

const ModifyAddressModal = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("myAddresses");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen} w={"fit-content"} _hover={{ color: "#6aa84f" }}>
        {t("modify")}
      </Link>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("modifyModelTitle")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModifyAddressModal;
