import MyAccountLayout from "@/components/MyAccountLayout";
import { Heading, Stack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import OrdersTable from "./OrdersTable";
import { postRequest } from "@/utils/db";
import { getSession } from "@/services/auth";
// import { orders } from "@/data/orders";

const MyOrders = async () => {
  const t = await getTranslations("orders");
  const session = await getSession();
  console.log("session", session.data.id);
  const orders = await postRequest(
    `/api/orders/client/getOrders/${session.data.id}`,
    {},
    session.data.access_token
  );
  return (
    <MyAccountLayout>
      <Stack gap={7} w={"100%"}>
        <Heading as="h2" size="lg">
          {t("title")}
        </Heading>
        <OrdersTable orders={orders} />
      </Stack>
    </MyAccountLayout>
  );
};

export default MyOrders;
