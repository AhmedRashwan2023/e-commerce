import { OrdersTableProps } from "@/data/types";
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

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const t = useTranslations("orders");
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr backgroundColor={"#eeeeee"}>
            <Th></Th>
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
          {orders.map((order, index) => (
            <Tr key={index} fontWeight={"semibold"}>
              <Td>
                <Image src={order.img} alt="Order Image" boxSize={"60px"} />
              </Td>
              <Td>{order.name}</Td>
              <Td>{order.id}</Td>
              <Td>{order.date}</Td>
              <Td>{order.qty}</Td>
              <Td>{order.status}</Td>
              <Td>{order.price}</Td>
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
