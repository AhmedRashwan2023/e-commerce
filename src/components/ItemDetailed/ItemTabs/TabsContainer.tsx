import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";
import { ItemProps } from "@/data/types";

const TabsContainer = ({ product }: { product: ItemProps }) => {
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
        {/* <Tab fontSize={13} fontWeight={"semibold"}>
          {t("reviewsTabTitle")}
        </Tab> */}
      </TabList>

      <TabPanels minH={320}>
        <TabPanel>
          <DescriptionTab product={product!} />
        </TabPanel>
        <TabPanel>
          <InformationTab product={product!} />
        </TabPanel>
        {/* <TabPanel>
          <ReviewsTab product={product!} />
        </TabPanel> */}
      </TabPanels>
    </Tabs>
  );
};

export default TabsContainer;
