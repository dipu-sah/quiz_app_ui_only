import { PaginationOptions } from "swiper/types/modules/pagination";
import { SwiperProps } from "swiper/react";

export interface AppCarouselProps extends SwiperProps {
  slidesPerView?: number;
  paginate?: PaginationOptions;
  children?: JSX.Element[];
  className?: string;
}
