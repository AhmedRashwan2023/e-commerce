import CategoriesSwiper from "@/components/MainPage/CategoriesSwiper";
import MainPageFooter from "@/components/MainPage/MainPageFooter";
import MostVisitedCats from "@/components/MainPage/MostVisitedCats";
import PageSwiper from "@/components/MainPage/PageSwiper";
import PopularProducts from "@/components/MainPage/PopularProducts";
import { postRequest } from "@/utils/db";
import { Box } from "@chakra-ui/react";

export default async function Index() {
  const categories = await postRequest("/api/categories/getCats", {});
  return (
    <Box>
      <PageSwiper />
      <CategoriesSwiper categories={categories} />
      <MostVisitedCats categories={categories} />
      <PopularProducts />
      <MainPageFooter />
    </Box>
  );
}
