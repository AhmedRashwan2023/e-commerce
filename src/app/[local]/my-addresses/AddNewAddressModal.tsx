"use client";
import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

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
          <ModalHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t("modelTitle")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewAddressModal;
