import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import AddressFormInput from "./AddressFormInput";
import AddressFormCheckbox from "./AddressFormCheckbox";

const AddressForm = ({
  initialValues,
}: {
  initialValues?: {
    id?: number;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    phone: string;
    postCode: string;
    businessName: string;
    setAsDefault: boolean;
  };
}) => {
  const t = useTranslations("myAddresses");
  const localeActive = useLocale();

  const handleAddAddress = async (formData: FormData) => {
    "use server";
    const dataItem = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      address1: formData.get("address1"),
      address2: formData.get("address2"),
      city: formData.get("city"),
      phone: formData.get("phone"),
      postCode: formData.get("postCode"),
      businessName: formData.get("businessName"),
      setAsDefault: formData.get("setAsDefault") === "on" ? true : false,
    };
    console.log(dataItem);
  };

  return (
    <form action={handleAddAddress} dir={localeActive === "ar" ? "rtl" : "ltr"}>
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
        name={"address1"}
        placeholder={t("address1")}
        value={initialValues?.address1 ?? ""}
      />
      <AddressFormInput
        name={"address2"}
        placeholder={t("address2")}
        value={initialValues?.address2 ?? ""}
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
        name={"postCode"}
        placeholder={t("postCode")}
        value={initialValues?.postCode ?? ""}
      />
      <AddressFormInput
        name={"businessName"}
        placeholder={t("businessName")}
        value={initialValues?.businessName ?? ""}
      />
      <AddressFormCheckbox
        text={t("setAsDefault")}
        value={initialValues?.setAsDefault ?? false}
      />
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
