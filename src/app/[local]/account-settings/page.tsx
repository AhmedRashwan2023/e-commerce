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
import ResetPasswordForm from "./ResetPasswordForm";
import UpdateUserData from "./UpdateUserData";
import DeleteAccount from "./DeleteAccount";

const AccountSettings = async () => {
  const t = await getTranslations("accountSettings");
  const activeLocale = await getLocale();
  const couter = 12;

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
          <UpdateUserData />
        </Stack>
        <Divider my={8} />
        <Text fontSize={18} fontWeight={"semibold"}>
          {t("password")}
        </Text>
        <ResetPasswordForm />
        <Divider my={8} />
        <Stack gap={4}>
          <Text fontSize={18} fontWeight={"semibold"}>
            {t("deleteAccountTitle")}
          </Text>
          <Text fontWeight={"semibold"} color={"#818181"}>
            {t("deleteAccQuestion")}
          </Text>
          <Text fontWeight={"semibold"} color={"#818181"}>
            {`${t("deleteAccNote2")}`}
          </Text>
          <DeleteAccount />
        </Stack>
      </Stack>
    </MyAccountLayout>
  );
};

export default AccountSettings;
