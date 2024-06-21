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
import React from "react";
import NextLink from "next/link";
import MyAccountLayout from "@/components/MyAccountLayout";
import { useLocale, useTranslations } from "next-intl";

const AccountSettings = () => {
  const t = useTranslations("accountSettings");
  const activeLocale = useLocale();
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
        <form>
          <HStack width={"80%"}>
            <FormControl>
              <FormLabel fontSize={14} fontWeight={"semibold"}>
                {t("newPass")}
              </FormLabel>
              <Input
                type="password"
                placeholder="**********"
                name="newPass"
                size="md"
                borderWidth={1}
                borderRadius={5}
                mb={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={14} fontWeight={"semibold"}>
                {t("currentPass")}
              </FormLabel>
              <Input
                type="password"
                placeholder="**********"
                name="currentPass"
                size="md"
                borderWidth={1}
                borderRadius={5}
                mb={3}
              />
            </FormControl>
          </HStack>
          <Text fontWeight={"semibold"} maxW={350} color={"#818181"} py={4}>
            {t("resetPassText")}
            <Link
              as={NextLink}
              href={`/${activeLocale}/account/signup`}
              color={"#01a915"}
              textDecoration={"none"}
              _hover={{ color: "#048414" }}
            >
              {t("resetPassLink")}
            </Link>
          </Text>
          <Button type="submit" colorScheme="yellow">
            {t("savePassword")}
          </Button>
        </form>
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
