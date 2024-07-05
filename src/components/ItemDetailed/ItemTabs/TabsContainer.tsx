import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";

const TabsContainer = () => {
  const t = useTranslations("itemDetailed");
  return (
    <Tabs colorScheme="yellow" py={"60px"}>
      <TabList>
        <Tab fontSize={13} fontWeight={"semibold"}>
          {t("productDetailsTabTitle")}
        </Tab>
        <Tab fontSize={13} fontWeight={"semibold"}>
          {t("informationTabTitle")}
        </Tab>
        <Tab fontSize={13} fontWeight={"semibold"}>
          {t("reviewsTabTitle")}
        </Tab>
      </TabList>

      <TabPanels minH={320}>
        <TabPanel>
          <DescriptionTab />
        </TabPanel>
        <TabPanel>
          <InformationTab />
        </TabPanel>
        <TabPanel>
          <ReviewsTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsContainer;
