import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/swiper.min.css";

const Test = () => {
  const [swiper, setSwiper] = useState();
  return (
    <div className="relative bg-white flex">
      <div>
        <IoChevronBack
          className="p-2 w-12 h-12 rounded-full text-n-blue border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
          onClick={() => swiper.slidePrev()}
        />
      </div>
      {/* <style>
        {`
			.swiper-slide{
				opacity: 0.5
			}
			.swiper-slide-active{
				opacity: 1
			}
		`}
      </style> */}
      <Swiper
        className="w-full lg:w-[1382px]"
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className="w-[150px] bg-w-yellow shadow-xl text-n-blue rounded-[30px]">
          {/* Card 1 */}
          <div>Card 1</div>
        </SwiperSlide>
        <SwiperSlide className="w-[150px] bg-w-yellow shadow-xl text-n-blue rounded-[30px]">
          {/* Card 2 */}
          <div>Card 2</div>
        </SwiperSlide>
        <SwiperSlide className="w-[150px] bg-w-yellow shadow-xl text-n-blue rounded-[30px]">
          {/* Card 3 */}
          <div>Card 3</div>
        </SwiperSlide>
        <SwiperSlide className="w-[150px] bg-w-yellow shadow-xl text-n-blue rounded-[30px]">
          {/* Card 4 */}
          <div>Card 4</div>
        </SwiperSlide>
        <SwiperSlide className="w-[150px] bg-w-yellow shadow-xl text-n-blue rounded-[30px]">
          {/* Card 5 */}
          <div>Card 5</div>
        </SwiperSlide>
        {/* Add more SwiperSlides for additional cards */}
      </Swiper>
      <div>
        <IoChevronForward
          className="p-2 w-12 h-12 rounded-full text-n-blue border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
          onClick={() => swiper.slideNext()}
        />
      </div>
    </div>
  );
};

export default Test;
