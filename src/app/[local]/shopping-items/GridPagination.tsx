"use client";
import { HStack, Text, Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const GridPagination = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <HStack justifyContent={"space-evenly"}>
        <Button>Prev</Button>
        <Text>NumberOfPage</Text>
        <Button>Next</Button>
      </HStack>
    </>
  );
};

export default GridPagination;
