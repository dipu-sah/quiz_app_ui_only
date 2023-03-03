import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Navigation, Scrollbar, Pagination, A11y, Controller } from "swiper";
import { AppCarouselProps } from "./AppCarousel.props";
export function AppCarousel({
  slidesPerView = 1,
  paginate = { clickable: true },
  modules = [],
  children = [],
  ...allProps
}: AppCarouselProps) {
  return (
    <Swiper
      className="h-full w-full"
      spaceBetween={50}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Controller,
        ...modules,
      ]}
      slidesPerView={slidesPerView}
      pagination={paginate}
      navigation={{ enabled: true }}
      {...allProps}
    >
      {children.map((e, index) => {
        return <SwiperSlide key={index}>{e}</SwiperSlide>;
      })}
    </Swiper>
  );
}
