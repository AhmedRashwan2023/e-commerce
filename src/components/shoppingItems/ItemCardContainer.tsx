import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const ItemCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderRadius={10}
      borderWidth={1}
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

export default ItemCardContainer;
