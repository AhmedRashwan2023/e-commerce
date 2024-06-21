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
interface Props {
  orders: {
    id: number;
    name: string;
    date: string;
    qty: number;
    status: string;
    price: number;
    img: string;
  }[];
}

const OrdersTable = ({ orders }: Props) => {
  const t = useTranslations("orders");
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr backgroundColor={"#eeeeee"}>
            <Th></Th> {/* img */}
            <Th>{t("products")}</Th> {/* name */}
            <Th>{t("orderId")}</Th> {/* id */}
            <Th>{t("date")}</Th> {/* date */}
            <Th>{t("qty")}</Th> {/* qty */}
            <Th>{t("status")}</Th> {/* state */}
            <Th>{t("price")}</Th> {/* price */}
            <Th></Th> {/* View */}
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
