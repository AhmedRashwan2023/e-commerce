import { OrderItems, OrdersTableProps, ProductsOrders } from "@/data/types";
import {
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { CiViewTimeline } from "react-icons/ci";

const OrdersTable = ({ orders }: { orders: OrdersTableProps[] }) => {
  const t = useTranslations("orders");

  const OrderedProds: ProductsOrders[] = [];

  orders.forEach((order) => {
    const prodsInOrder = order.orderItems;
    prodsInOrder.forEach((prod) => {
      const orderData = {
        product: prod.product,
        orderId: order.orderId,
        date: order.dateTime,
        price: prod.price,
        qty: prod.quantity,
        status: order.status,
        address: order.address,
      };
      OrderedProds.push(orderData);
    });
  });

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr backgroundColor={"#eeeeee"}>
            <Th>{t("products")}</Th>
            <Th>{t("orderId")}</Th>
            <Th>{t("date")}</Th>
            <Th>{t("qty")}</Th>
            <Th>{t("status")}</Th>
            <Th>{t("price")}</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {OrderedProds.map((prod, index) => (
            <Tr key={index} fontWeight={"semibold"}>
              <Td>{prod.product}</Td>
              <Td>{prod.orderId}</Td>
              <Td>{prod.date}</Td>
              <Td>{prod.qty}</Td>
              <Td>{prod.status}</Td>
              <Td>{prod.price}</Td>
              <Td>
                <CiViewTimeline />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
