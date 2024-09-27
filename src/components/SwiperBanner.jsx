import banner1 from "@/assets/img/banner1.png";
import banner2 from "@/assets/img/banner2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/css/swiperStyle.css";

function SwiperBanner() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        className="z-10"
        spaceBetween={50}
        slidesPerView={1} //每頁顯示幾張
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // 自動播放延遲 3 秒
          disableOnInteraction: false, // 用戶交互後仍繼續自動播放
        }}
      >
        <SwiperSlide>
          <img src={banner1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img src={banner2} alt="banner2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperBanner;
