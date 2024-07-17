import {
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import AddressFormInput from "./AddressFormInput";
import AddressFormCheckbox from "./AddressFormCheckbox";
import { handleAddAddress, handleUpdateAddress } from "./action";
import { useRouter } from "next/navigation";

const AddressForm = ({
  initialValues,
  onClose,
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
  onClose?: () => void;
}) => {
  const t = useTranslations("myAddresses");
  const localeActive = useLocale();
  const toast = useToast();
  const router = useRouter()
  const handleFormAction = async (formData: FormData) => {
    const dataItem = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      firstAddress: formData.get("firstAddress"),
      secondAddress: formData.get("secondAddress"),
      city: formData.get("city"),
      phone: formData.get("phone"),
      postNum: formData.get("postNum"),
      work: formData.get("work"),
      // setAsDefault: formData.get("setAsDefault") === "on" ? true : false,
    };

    if (
      dataItem.firstName === "" ||
      dataItem.lastName === "" ||
      dataItem.firstAddress === "" ||
      dataItem.secondAddress === "" ||
      dataItem.phone === "" ||
      dataItem.postNum === "" ||
      dataItem.city === ""
    ) {
      toast({
        description: `Please make sure that all fields are added`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    if (initialValues) {
      const data = await handleUpdateAddress(formData, initialValues.id!);
      if(data!.error){
        toast({
          description: `error in updating`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      else{
        toast({
          description: `Address Updated`,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.refresh()
      }
    } else {
      const data = await handleAddAddress(formData);
      console.log(data)
      if(data!.error){
        toast({
          description: `error`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      else{
        toast({
          description: `Address Added`,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.refresh()
      }
    }
    if (onClose) onClose();
  };

  return (
    <form action={handleFormAction} dir={localeActive === "ar" ? "rtl" : "ltr"}>
      <Text fontSize={13} pb={3} fontWeight={"semibold"} color={"#797b7e"}>
        {t("modelDesc")}
      </Text>
      <AddressFormInput
        name={"firstName"}
        placeholder={t("firstName")}
        value={initialValues?.firstName ?? ""}
      />
      <AddressFormInput
        name={"lastName"}
        placeholder={t("lastName")}
        value={initialValues?.lastName ?? ""}
      />
      <AddressFormInput
        name={"firstAddress"}
        placeholder={t("firstAddress")}
        value={initialValues?.firstAddress ?? ""}
      />
      <AddressFormInput
        name={"secondAddress"}
        placeholder={t("secondAddress")}
        value={initialValues?.secondAddress ?? ""}
      />
      <AddressFormInput
        name={"city"}
        placeholder={t("city")}
        value={initialValues?.city ?? ""}
      />
      <AddressFormInput
        name={"phone"}
        placeholder={t("phone")}
        value={initialValues?.phone ?? ""}
      />
      <AddressFormInput
        name={"postNum"}
        placeholder={t("postCode")}
        value={initialValues?.postNum ?? ""}
      />
      <AddressFormInput
        name={"work"}
        placeholder={t("businessName")}
        value={initialValues?.work ?? ""}
      />
      {/* <AddressFormCheckbox
        text={t("setAsDefault")}
        value={initialValues?.setAsDefault ?? false}
      /> */}
      <Flex justifyContent={"flex-end"} p={3}>
        <Button
          type="submit"
          backgroundColor={"#01114d"}
          color={"white"}
          borderColor={"#01114d"}
          borderWidth={1}
          _hover={{ bg: "white", color: "#01114d" }}
        >
          {t("saveAddress")}
        </Button>
      </Flex>
    </form>
  );
};

export default AddressForm;
