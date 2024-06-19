import { Box } from "@chakra-ui/react";
import React from "react";

const LabelBagde = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      fontWeight={"bold"}
      fontSize={11}
      backgroundColor={"#ffc107"}
      px={1}
      borderRadius={4}
      w={"fit-content"}
    >
      {children}
    </Box>
  );
};

export default LabelBagde;
