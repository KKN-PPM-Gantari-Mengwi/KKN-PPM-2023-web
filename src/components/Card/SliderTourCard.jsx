import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const SliderTourCard = (e) => {
  return (
    <div className="bg-[#FAFAFA] w-full h-full shadow-2xl rounded-[30px]">
      {/* Image */}
      <div className=" pt-8 w-full ">
        <Image
          src={e.imageUrl}
          alt="wisata sobangan"
          width={377}
          height={248}
          className="rounded-[30px] md:mx-auto xl:px-0 px-4 aspect-[3/2]"
        />
      </div>
      {/* title */}
      <div>
        <div className="ml-8 mt-4">
          <h2 className="md:text-3xl text-2xl font-poppins font-bold ">{e.title}</h2>
          <h3 className="md:text-2xl text-xl font-poppins font-semibold text-s-orange">{e.location}</h3>
        </div>
        <p className="mx-8 mt-3">
         {e.desc}
        </p>
      </div>
      {/* <div>Card 1</div>
      <div>Card 1</div> */}
      <Link href={e.pageUrl} className="flex justify-end py-6 mr-8">
        <div className="flex w-[199px] h-[45px] transition-all bg-gradient-to-r from-s-orange to-t-orange  hover:from-n-blue hover:to-t-blue rounded-[30px] text-white text-center items-center justify-center">
            <p className="text-center text-xl font-poppins">
            Selengkapnya
            </p>
        </div>
      </Link>
    </div>
  );
};

export default SliderTourCard;
