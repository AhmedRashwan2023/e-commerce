import { ItemProps } from "@/components/ShoppingItems/ItemCard";
import {
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const InformationTab = ({ product }: { product: ItemProps }) => {
  const t = useTranslations("informationTab");

  return (
    <Stack>
      <Text fontWeight={"semibold"} fontSize={22} py={2}>
        {t("title")}
      </Text>
      <TableContainer w={"50%"} fontSize={16}>
        <Table variant="striped" colorScheme="gray" color={"#5b5b5b"}>
          <Tbody>
            <Tr>
              <Td fontWeight={"semibold"}>{t("weight")}</Td>
              <Td textAlign={"center"}>{product.weight}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>{t("ingredient")}</Td>
              <Td textAlign={"center"}>{product.categoryName}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>{t("units")}</Td>
              <Td textAlign={"center"}>{product.unites}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default InformationTab;
