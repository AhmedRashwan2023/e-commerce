import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const LabelBagde = ({ children }: { children: ReactNode }) => {
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
