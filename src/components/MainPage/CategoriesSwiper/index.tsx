"use client";
import { bodyPadding } from "@/assets/global";
import { Category } from "@/data/types";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoriesSwiper = ({ categories }: { categories: Category[] }) => {
  const t = useTranslations("menuCategores");

  return (
    <Box px={bodyPadding} h={"400px"} py={12}>
      <Text fontSize={25} fontWeight={"semibold"}>
        {t("title")}
      </Text>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={swiperStyle}
        pagination={true}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategorySlide category={cat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CategoriesSwiper;

const swiperStyle = {
  width: "100%",
  height: "100%",
};

const CategorySlide = ({ category }: { category: Category }) => {
  const localeActive = useLocale();

  return (
    <Link
      // as={NextLink}
      href={`/${localeActive}/shopping-items?catId=${category.id}`}
    >
      <Flex
        h={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        borderWidth={1}
        borderRadius={5}
        m={2}
        gap={3}
      >
        <Image
          alt=""
          src={
            category.image
              ? `https://srv14.optimgov.com/images/${category.image}`
              : ""
          }
          boxSize={"200px"}
        />
        <Text fontSize={16} fontWeight={"semibold"}>
          {category.name}
        </Text>
      </Flex>
    </Link>
  );
};
