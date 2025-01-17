"use client";
import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import AddressForm from "./AddressForm/AddressForm";

const ModifyAddressModal = ({
  initialValues,
}: {
  initialValues?: {
    id?: number;
    firstName: string;
    lastName: string;
    firstAddress: string;
    secondAddress: string;
    city: string;
    phone: string;
    postNum: string;
    work: string;
    setAsDefault: boolean;
  };
}) => {
  const t = useTranslations("myAddresses");
  const localeActive = useLocale();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen} w={"fit-content"} _hover={{ color: "#6aa84f" }}>
        {t("modify")}
      </Link>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent dir={localeActive === "ar" ? "rtl" : "ltr"}>
          {/* <ModalHeader>{t("modifyModelTitle")}</ModalHeader> */}
          <ModalHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t("modifyModelTitle")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <AddressForm onClose={onClose} initialValues={initialValues} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModifyAddressModal;
