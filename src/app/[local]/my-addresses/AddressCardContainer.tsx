import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const AddressCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default AddressCardContainer;
