import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const CountBadge = ({
  children,
  count,
}: {
  children: ReactNode;
  count?: number | null;
}) => {
  return (
    <Box position={"relative"}>
      {count !== null && count !== 0 && (
        <Box
          position={"absolute"}
          backgroundColor={"#cc0000"}
          px={2}
          color={"#ffffff"}
          borderRadius={50}
          top={-2}
          right={-3}
          fontSize={12}
        >
          {count}
        </Box>
      )}
      <Box color={"#f1c232"}>{children}</Box>
    </Box>
  );
};

export default CountBadge;

//
