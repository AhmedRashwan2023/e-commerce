"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

// const breakpoints = {
//   base: "0em",
//   sm: "30em", //480px
//   md: "48em", //768px
//   lg: "62em", //992px
//   xl: "80em", //1280px
//   "2xl": "96em", //1536px
// };

// const theme = extendTheme({
//   breakpoints,
// });

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <ChakraProvider>
      <Box dir={pathname.includes("ar") ? "rtl" : "ltr"} fontSize={"14px"}>
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Provider;
