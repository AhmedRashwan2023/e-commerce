import MyAccountLayout from "@/components/MyAccountLayout";
import { Heading, Stack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import OrdersTable from "./OrdersTable";
import { orders } from "@/data/orders";

const MyOrders = async () => {
  const t = await getTranslations("orders");
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
