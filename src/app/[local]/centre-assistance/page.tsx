import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";
import HelpCenterIntro from "./HelpCenterIntro";
import ServicesCards from "./ServicesCards";
import OrdersFollowUp from "./OrdersFollowUp";
import MyAccountLayout from "@/components/MyAccountLayout";

const CentreAssistance = () => {
  return (
    <MyAccountLayout>
      <Box px={bodyPadding}>
        <HelpCenterIntro />
        <ServicesCards />
        <OrdersFollowUp />
      </Box>
    </MyAccountLayout>
  );
};

export default CentreAssistance;
