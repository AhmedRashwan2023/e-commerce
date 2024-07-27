"use client";
import {
  Text,
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { IoCheckmarkCircle } from "react-icons/io5";
import RemoveAllItemsBtn from "./RemoveAllItemsBtn";
import NextLink from "next/link";
import SignInForm from "@/components/Account/SignInForm";
import { IoMdClose } from "react-icons/io";
import { handleSignIn } from "@/components/Account/action";
import InputPassword from "@/components/FormControl/InputPassword";
import router from "next/router";
import { useRouter } from "next/navigation";

const ExecuteCart = ({
  onClose,
  session,
}: {
  onClose: () => void;
  session: any;
}) => {
  const t = useTranslations("shoppingCart");
  const localeActive = useLocale();

  return (
    <Flex w={"100%"} justifyContent={"flex-end"} gap={2}>
      <RemoveAllItemsBtn />
      {!session && <ExecuteCartLoginModal closeDrawer={onClose} />}
      {session && (
        <Link
          // as={NextLink}
          href={`/${localeActive}/shopping-cart`}
        >
          <Button
            colorScheme="green"
            size="sm"
            leftIcon={<IoCheckmarkCircle />}
            type={"submit"}
            onClick={() => {
              if (onClose) onClose();
            }}
          >
            {t("execute")}
          </Button>
        </Link>
      )}
    </Flex>
  );
};

export default ExecuteCart;

const ExecuteCartLoginModal = ({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("shoppingCart");
  const t2 = useTranslations("signInPage");
  const localeActive = useLocale();
  const toast = useToast();
  const router = useRouter();

  const handleFormAction = async (formData: FormData) => {
    const data = await handleSignIn(formData);
    if (data?.error) {
      toast({
        description: t2("signInError"),
        position: localeActive === "ar" ? "top-left" : "top-right",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    } else {
      router.push(`/${localeActive}/shopping-cart`);
      closeDrawer();
    }
  };

  return (
    <>
      <Button
        colorScheme="green"
        size="sm"
        leftIcon={<IoCheckmarkCircle />}
        type={"submit"}
        onClick={onOpen}
      >
        {t("execute")}
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent dir={localeActive === "ar" ? "rtl" : "ltr"}>
          <ModalHeader dir={localeActive === "ar" ? "rtl" : "ltr"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{t2("signInButton")}</Text>
              <Link onClick={onClose} color={"#000000"}>
                <IoMdClose />
              </Link>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <form action={handleFormAction}>
              <Input
                name="username"
                type="email"
                placeholder={t2("email")}
                size="md"
                borderColor={"rgb(1,17,77)"}
                _hover={{ borderColor: "rgb(1,17,77)" }}
                borderWidth={1}
                mb={3}
                // value={"administrateur@optimgov.com"}
              />
              <InputPassword isRequired />
              <HStack fontWeight={"semibold"}>
                <Text color={"#818181"}>{t2("forgotPassword")}</Text>
                <Link
                  // as={NextLink}
                  href={`/${localeActive}/account/reset-password`}
                  color={"rgb(1,17,77)"}
                >
                  {t2("forgotPasswordLink")}
                </Link>
              </HStack>
              <Button
                type="submit"
                backgroundColor={"rgb(1,17,77)"}
                color={"white"}
                my={3}
                w={"100%"}
                _hover={{
                  bg: "white",
                  borderColor: "rgb(1,17,77)",
                  border: "1px",
                  color: "rgb(1,17,77)",
                }}
              >
                {t2("signInButton")}
              </Button>
              <HStack fontWeight={"semibold"}>
                <Text color={"#818181"}>{t2("dontHaveAcc")}</Text>
                <Link
                  // as={NextLink}
                  href={`/${localeActive}/account/signup`}
                  color={"rgb(1,17,77)"}
                >
                  {t2("registerLink")}
                </Link>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
