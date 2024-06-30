import CategoriesSwiper from "@/components/MainPage/CategoriesSwiper";
import MainPageFooter from "@/components/MainPage/MainPageFooter";
import MostVisitedCats from "@/components/MainPage/MostVisitedCats";
import PageSwiper from "@/components/MainPage/PageSwiper";
import PopularProducts from "@/components/MainPage/PopularProducts";
import { Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <Box>
      <PageSwiper />
      <CategoriesSwiper />
      <MostVisitedCats />
      <PopularProducts />
      <MainPageFooter />
    </Box>
  );
}
