import { ItemProps } from "@/data/types";
import {
  Show,
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
      <TableContainer w={{ base: "100%", lg: "50%" }} fontSize={16}>
        <Table variant="striped" colorScheme="gray" color={"#5b5b5b"}>
          <Tbody>
            <Tr>
              <Td>
                <Text fontWeight={"semibold"}>{t("weight")}</Text>
                <Show below="md">
                  <Text px={10} pt={3}>
                    {product.weight}
                  </Text>
                </Show>
              </Td>
              <Show above="md">
                <Td textAlign={"center"}>{product.weight}</Td>
              </Show>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"semibold"}>{t("ingredient")}</Text>
                <Show below="md">
                  <Text px={10} pt={3}>
                    {product.categoryName}
                  </Text>
                </Show>
              </Td>
              <Show above="md">
                <Td textAlign={"center"}>{product.categoryName}</Td>
              </Show>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"semibold"}>{t("units")}</Text>
                <Show below="md">
                  <Text px={10} pt={3}>
                    {product.unites}
                  </Text>
                </Show>
              </Td>
              <Show above="md">
                <Td textAlign={"center"}>{product.unites}</Td>
              </Show>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default InformationTab;
