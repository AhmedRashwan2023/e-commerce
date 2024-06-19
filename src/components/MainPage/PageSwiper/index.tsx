"use client";
import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const PageSwiper = () => {
  return (
    <Box backgroundColor={"#01114d"} h={815} px={bodyPadding} py={6}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        style={swiperStyle}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PageSwiper;

const swiperStyle = {
  backgroundColor: "white",
  color: "black",
  height: "720px",
  borderRadius: "08px",
};
