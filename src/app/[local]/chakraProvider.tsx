"use client";

import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

const breakpoints = {
  base: "0em",
  sm: "30em", //480px
  md: "48em", //768px
  md2: "820px",
  lg: "62em", //992px
  xl: "80em", //1280px
  "2xl": "96em", //1536px
};

const theme = extendTheme({
  breakpoints,
});

const Provider = ({ children }: { children: ReactNode }) => {
  const activeLocale = useLocale();

  return (
    <ChakraProvider theme={theme}>
      <Box dir={activeLocale === "ar" ? "rtl" : "ltr"} fontSize={"14px"}>
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Provider;
