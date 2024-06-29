import MyAccountLayout from "@/components/MyAccountLayout";
import CartViewer from "@/components/Navigator/NavBar/CartDrawer/CartViewer";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ShippoingOptions from "./ShippoingOptions";
import AddressAndPayment from "./AddressAndPayment";

const ExecuteShoppingCart = () => {
  return (
    <MyAccountLayout>
      <Stack gap={5} w={"100%"}>
        <CartViewer />
        <AddressAndPayment />
      </Stack>
    </MyAccountLayout>
  );
};

export default ExecuteShoppingCart;
