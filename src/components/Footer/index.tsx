import { bodyPadding } from "@/assets/global";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import MeetWithUs from "./MeetWithUs";
import ForCustomers from "./ForCustomers";
import CopyRightsAndSocial from "./CopyRightsAndSocial";

const Footer = () => {
  return (
    <Box px={bodyPadding} py={39} color={"white"} backgroundColor={"#01114d"}>
      <HStack gap={20} pb={6}>
        <MeetWithUs />
        <ForCustomers />
      </HStack>
      <hr />
      <CopyRightsAndSocial />
    </Box>
  );
};

export default Footer;
