import React, { useState, useRef } from "react";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import TourismCard from "../../components/Card/TourismCard.jsx";
import Dummy from "./../../../public/images/assets/dummy-tour-1.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const wisata = [
  {
    title: "Kebun Bunga",
    location: "Desa Sobangan",
    eventName: "Early Bird Registration",
    imgSrc: "/images/timeline/1.jpg",
    link: "",
  },
  {
    title: "Pancoran Solas",
    location: "Desa Sobangan",
    eventName: "Regular Registration",
    imgSrc: "/images/timeline/2.jpg",
    link: "",
  },
  {
    title: "Subak Lemut",
    location: "Desa Baha",
    eventName: "Online Preliminary",
    imgSrc: "/images/timeline/3.jpg",
    link: "",
  },
];

function Wisata_Mengwi() {
  const [swiper, setSwiper] = useState();

  const swiperRef = useRef(null);

  const handleSwipe = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (direction === "next") {
        swiperInstance.slideNext();
      } else if (direction === "prev") {
        swiperInstance.slidePrev();
      }
    }
  };

  const NextAction = (e) => {
    if (swiper.activeIndex !== 2) return swiper.slideTo(2);

    return primaryProps.onClick(e);
  };
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      {/* h-[735px] */}
      <section className="bg-wisata-1 w-full h-screen">
        <div className="wisataCover1 w-full h-full">
          <div className="2xl:pt-[340px] pt-[250px]">
            <div className="block z-0">
              <h1
                className="flex justify-center items-center text-t-orange my-auto -translate-x-5  md:text-9xl text-6xl font-Natural z-0"
                data-aos="fade-left"
              >
                Wisata
              </h1>
              <h1
                className="flex justify-center items-center text-white my-auto translate-x-5 -translate-y-3 md:text-9xl text-6xl font-Natural"
                data-aos="fade-right"
              >
                Mengwi
              </h1>
              <h3
                className="flex justify-center items-center text-white pt-2 text-xl font-poppins"
                data-aos="fade-up"
              >
                KKN PPM UGM Periode 2 Tahun 2023
              </h3>
            </div>

            <div
              className="mt-2 mx-auto h-[40px] w-[364px] rounded-[30px] bg-gradient-to-r from-s-orange to-t-orange"
              data-aos="fade-up"
            >
              <p className="flex justify-center items-center pt-2 text-white font-poppins">
                Jelajahi Sekarang!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full lg:h-screen h-[1600px]  bg-gradient-to-r from-n-blue to-t-blue">
        <div className="w-full h-full bg-pattern-2">
          <div className="h-[120vh] lg:h-screen w-full lg:pl-20 py-36 gap-10 flex flex-col lg:flex-row items-center justify-center bg-green-light max-w-full overflow-hidden">
            <div
              className="flex-[1] h-full px-10 lg:px-0 flex items-center"
              data-aos="fade-right"
            >
              <div className="flex flex-col items-center lg:items-start gap-10 text-center lg:text-start">
                <h1 className="text-s-orange text-8xl font-Natural translate-y-10">
                  Wisata
                </h1>
                <h1 className="text-t-orange text-8xl font-Natural -translate-y-5 translate-x-5">
                  Mengwi
                </h1>
                <div className="flex gap-5 w-full justify-center">
                  <IoChevronBack
                    className="p-2 w-12 h-12 rounded-full text-white border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
                    onClick={() => swiper.slidePrev()}
                  />
                  <IoChevronForward
                    className="p-2 w-12 h-12 rounded-full text-white border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
                    onClick={() => swiper.slideNext()}
                  />
                </div>
              </div>
            </div>
            <div
              className="flex-[3] w-full h-screen lg:h-full px-5 lg:px-0 py-10"
              data-aos="fade-left"
            >
              <style>
                {`
							.swiper-slide{
								opacity: 0.5
							}
							.swiper-slide-active{
								opacity: 1
							}
						`}
              </style>
              <Swiper
                centeredSlides
                slidesPerView="auto"
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="w-full lg:w-[60vw] h-[55vh] lg:h-[65vh]"
                onSwiper={(swiper) => setSwiper(swiper)}
                breakpoints={{
                  100: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {wisata.map((val, index) => {
                  return (
                    <SwiperSlide className="h-full w-full mx-16" key={index}>
                      <div className="h-[45vh] lg:h-[50vh] w-[40vw] lg:w-[22vw] p-4 pt-8 flex flex-col gap-2 rounded-2xl break-words bg-gradient-to-b from-s-orange to-t-orange">
                        <h2 className="text-4xl font-poppins font-semibold leading-1 text-w-yellow text-shadow mx-auto">
                          {val.title}
                        </h2>
                        <p className="text-3xl font-poppins font-semibold leading-1 text-white text-shadow mx-auto">
                          {val.location}
                        </p>
                        <Link href="#" className="mx-auto mt-14 mb-2">
                          <div className="w-full bg-gradient-to-r from-n-blue to-t-blue rounded-2xl text-white font-poppins font-semibold py-1 px-8">
                            Jelajahi Sekarang
                          </div>
                        </Link>
                        <div className="relative h-[60%] w-full rounded-lg">
                          <Image
                            className="rounded-lg"
                            src={val.imgSrc ?? "/images/bg/placeholder.png"}
                            alt="image preview"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        {/* <button className="p-2 rounded-full border-2 font-medium text-c-yellow border-c-yellow bg-transparent hover:!bg-c-yellow hover:text-green-light cursor-pointer transition-all">
											learn more
										</button> */}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="block w-full lg:h-screen h-[1600px]  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="block w-full h-screen bg-pattern-1">
          {/* headline */}
          <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[270px]">
            <div className="mx-auto">
              <h1
                data-aos="fade-up"
                className="flex justify-center md:text-8xl text-6xl text-w-yellow font-Natural"
              >
                Wisata
              </h1>
              <h1
                data-aos="fade-up"
                className="flex justify-center md:text-5xl text-4xl text-white font-poppins font-bold"
              >
                Mengwi
              </h1>
            </div>
          </div>
          {/* card container */}
          <div className="flex justify-center mt-8">
            <div className="block gap-16">
              {/* card baha */}
              <div className="w-[1553px] h-[295px] bg-wisata-card-baha" data-aos="fade-up">
                <div className="wisata-card-baha w-full h-full">
                  <div className="flex justify-between h-full mx-20 items-center">
                    <div data-aos="fade-right">
                      <Link href="#">
                        <div className="w-full bg-gradient-to-r from-s-orange to-t-orange rounded-[30px] px-6 py-2 text-white font-poppins text-xl">
                          Jelajahi Sekarang
                        </div>
                      </Link>
                    </div>
                    <div className="block" data-aos="fade-left">
                      <h2 className="text-6xl text-white font-Natural">Desa</h2>
                      <h2 className="text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                        Baha
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* card sobangan */}
              <div className="w-[1553px] h-[295px] bg-wisata-card-sobangan mt-8" data-aos="fade-up">
                <div className="wisata-card-sobangan w-full h-full">
                  <div className="flex justify-between h-full mx-20 items-center">
                    <div className="block" data-aos="fade-right">
                      <h2 className="text-6xl text-white font-Natural">Desa</h2>
                      <h2 className="text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                        Sobangan
                      </h2>
                    </div>
                    <div data-aos="fade-left">
                      <Link href="#">
                        <div className="w-full bg-gradient-to-r from-s-orange to-t-orange rounded-[30px] px-6 py-2 text-white font-poppins text-xl">
                          Jelajahi Sekarang
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Wisata_Mengwi;
