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
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import SignInForm from "./SignInForm";
import { SignInFormProps } from "@/data/types";

const LoginModal = ({
  specialURL,
  icon,
  fontSize,
}: SignInFormProps & {
  icon: string;
  fontSize?: number;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("signInPage");
  const localeActive = useLocale();

  const Icon =
    icon === "GoHeart"
      ? GoHeart
      : icon === "IoPerson"
      ? IoPerson
      : icon === "GoHeartFill"
      ? GoHeartFill
      : TfiLayoutWidthDefaultAlt;

  return (
    <>
      <Link onClick={onOpen} fontSize={fontSize ? fontSize : 20}>
        <Icon />
      </Link>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent dir={localeActive === "ar" ? "rtl" : "ltr"}>
          <ModalHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t("signInButton")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <SignInForm specialURL={specialURL} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
