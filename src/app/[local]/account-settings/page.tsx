import MyAccountLayout from "@/components/MyAccountLayout";
import { getSession } from "@/services/auth";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getLocale, getTranslations } from "next-intl/server";
import NextLink from "next/link";

const AccountSettings = async () => {
  const t = await getTranslations("accountSettings");
  const activeLocale = await getLocale();
  const couter = 12;

  const handleDetails = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    console.log(name, email, phone);
  };

  const deleteAccountAction = async (formData: FormData) => {
    "use server";
    console.log("Account Delete Actions here");
  };

  return (
    <MyAccountLayout>
      <Stack w={900} p={3}>
        <Stack gap={4} w={"fit-content"}>
          <Heading as="h2" size="lg">
            {t("title")}
          </Heading>
          <Text fontSize={18} fontWeight={"semibold"}>
            {t("detailsTitle")}
          </Text>
          <form action={handleDetails}>
            <FormControl>
              <FormLabel fontSize={14} fontWeight={"semibold"}>
                {t("name")}
              </FormLabel>
              <Input
                name="name"
                size="md"
                borderWidth={1}
                borderRadius={5}
                mb={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={14} fontWeight={"semibold"}>
                {t("email")}
              </FormLabel>
              <Input
                name="email"
                type="email"
                size="md"
                borderWidth={1}
                borderRadius={5}
                mb={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={14} fontWeight={"semibold"}>
                {t("phone")}
              </FormLabel>
              <Input
                name="phone"
                size="md"
                borderWidth={1}
                borderRadius={5}
                mb={3}
              />
            </FormControl>
            <Button type="submit" colorScheme="yellow">
              {t("saveDetails")}
            </Button>
          </form>
        </Stack>
        <Divider my={8} />
        <Text fontSize={18} fontWeight={"semibold"}>
          {t("password")}
        </Text>

        <Divider my={8} />
        <Stack gap={4}>
          <Text fontSize={18} fontWeight={"semibold"}>
            {t("deleteAccountTitle")}
          </Text>
          <Text fontWeight={"semibold"} color={"#818181"}>
            {t("deleteAccQuestion")}
          </Text>
          <Text fontWeight={"semibold"} color={"#818181"}>
            {`${t("deleteAccNote1")} ${couter} ${t("deleteAccNote2")}`}
          </Text>
          <form action={deleteAccountAction}>
            <Button
              colorScheme="red"
              w={"fit-content"}
              variant="outline"
              type="submit"
            >
              {t("deleteAccAction")}
            </Button>
          </form>
        </Stack>
      </Stack>
    </MyAccountLayout>
  );
};

export default AccountSettings;
