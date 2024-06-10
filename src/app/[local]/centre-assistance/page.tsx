import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";
import HelpCenterIntro from "./HelpCenterIntro";
import ServicesCards from "./ServicesCards";
import OrdersFollowUp from "./OrdersFollowUp";

const CentreAssistance = () => {
  return (
    <Box px={bodyPadding}>
      <HelpCenterIntro />
      <ServicesCards />
      <OrdersFollowUp />
    </Box>
  );
};

export default CentreAssistance;
