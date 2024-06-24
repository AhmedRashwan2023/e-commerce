"use client";
import { bodyPadding } from "@/assets/global";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const PageSwiper = () => {
  return (
    <Box
      backgroundColor={"#01114d"}
      px={bodyPadding}
      py={6}
      h={{ base: "760px", lg: "730px", xl: "700px" }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000000,
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
  height: "100%",
  borderRadius: "08px",
};
