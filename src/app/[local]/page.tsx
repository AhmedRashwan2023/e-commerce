import { bodyPadding } from "@/assets/global";
import MainPageFooter from "@/components/MainPage/MainPageFooter";
import PageSwiper from "@/components/MainPage/PageSwiper";
import { Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <Box>
      <PageSwiper />
      <Box px={bodyPadding}>
        <MainPageFooter />
      </Box>
    </Box>
  );
}
