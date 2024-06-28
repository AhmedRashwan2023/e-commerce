import MyAccountLayout from "@/components/MyAccountLayout";
import CartViewer from "@/components/Navigator/NavBar/CartDrawer/CartViewer";
import React from "react";

const ExecuteShoppingCart = () => {
  return (
    <MyAccountLayout>
      <CartViewer />
    </MyAccountLayout>
  );
};

export default ExecuteShoppingCart;
