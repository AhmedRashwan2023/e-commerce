import { bodyPadding } from "@/assets/global";
import { getSession, signOut } from "@/services/auth";
import { Box, Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import React from "react";
import { MdLogout } from "react-icons/md";
import SideLink from "./SideLink";
import { getLocale, getTranslations } from "next-intl/server";

const MyAccountLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations("myAccount");
  const activeLocale = await getLocale();
  const session = await getSession();
  if (!session) redirect(`/${activeLocale}`);

  const handleSignOut = async () => {
    "use server";
    await signOut();
    redirect(`/${activeLocale}`);
  };

  return (
    <Flex px={bodyPadding} gap={10}>
      <Stack py={"3rem"}>
        <SideLink href="orders" text={t("myOrders")} icon={"FaShoppingBag"} />
        <SideLink
          href="account-settings"
          text={t("settings")}
          icon={"CiSettings"}
        />
        <SideLink
          href="my-addresses"
          text={t("address")}
          icon={"MdLocationPin"}
        />
        <SideLink
          href="notification-settings"
          text={t("notifications")}
          icon={"FaRegBell"}
        />
        <Divider my={3} />
        <form action={handleSignOut}>
          <button type="submit">
            <HStack
              fontSize={15}
              px={4}
              py={2}
              borderRadius={8}
              w={250}
              h={"fit-content"}
              gap={3}
              _hover={{ bg: "#eeeeee" }}
            >
              <Text>
                <MdLogout />
              </Text>
              <Text>{t("signOut")}</Text>
            </HStack>
          </button>
        </form>
      </Stack>
      <Box w={"1px"} backgroundColor={"#eef1f6"}></Box>
      <Box py={"3rem"} w={"100%"}>
        {children}
      </Box>
    </Flex>
  );
};

export default MyAccountLayout;
