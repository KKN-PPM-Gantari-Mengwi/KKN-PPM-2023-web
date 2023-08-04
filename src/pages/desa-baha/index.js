import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/swiper.min.css";
import Link from "next/link";
import DefaultLayout from "./../../components/DefaultLayout/DefaultLayout.jsx";
import SliderTourCard from "../../components/Card/SliderTourCard.jsx";

const wisata = [
  {
    title: "Wisata Taman Manik Segara",
    location: "Desa Baha",
    desc: "Wisata pemandian di Desa Sobangan merupakan tempat pemandian dengan nuansa alam yang mengalirkan air dari mata air di Desa Sobangan",
    imageUrl: "/images/wisata/taman-manik-segara/main.jpg",
    pageUrl: "/desa-baha/wisata/taman-manik-segara",
  },
  {
    title: "Wisata Subak Lepud",
    location: "Desa Baha",
    desc: "Wisata pemandian di Desa Sobangan merupakan tempat pemandian dengan nuansa alam yang mengalirkan air dari mata air di Desa Sobangan",
    imageUrl: "/images/assets/pancoran-beji.png",
    pageUrl: "/desa-baha/wisata/subak-lepud",
  },
  {
    title: "Warung Umasana",
    location: "Desa Baha",
    desc: "Wisata pemandian di Desa Sobangan merupakan tempat pemandian dengan nuansa alam yang mengalirkan air dari mata air di Desa Sobangan",
    imageUrl: "/images/assets/pancoran-beji.png",
    pageUrl: "/desa-baha/wisata/warung-umasana",
  },
  {
    title: "Wisata Jogging Track",
    location: "Desa Baha",
    desc: "Wisata pemandian di Desa Sobangan merupakan tempat pemandian dengan nuansa alam yang mengalirkan air dari mata air di Desa Sobangan",
    imageUrl: "/images/assets/pancoran-beji.png",
    pageUrl: "/desa-baha/wisata/jogging-track",
  },
  {
    title: "Wisata Agrowisata Lebah",
    location: "Desa Baha",
    desc: "Wisata pemandian di Desa Sobangan merupakan tempat pemandian dengan nuansa alam yang mengalirkan air dari mata air di Desa Sobangan",
    imageUrl: "/images/wisata/taman-manik-segara/main.jpg",
    pageUrl: "/desa-baha/wisata/agrowisata-lebah",
  },
];

const Desa_Baha = () => {
  const [swiper, setSwiper] = useState();
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-sobangan-1 h-screen w-full">
        <div className="sobanganCover w-full h-screen">
          <div className=" my-auto ml-[1500px] pt-[400px]">
            <h1
              className=" pl-28 text-8xl  font-Natural text-white"
              data-aos="fade-left"
            >
              Desa
            </h1>
            <h1
              className=" pl-24 text-8xl  font-Natural text-white"
              data-aos="fade-left"
            >
              Baha
            </h1>
            <div
              className="mt-2  h-[40px] w-[364px] rounded-[30px] bg-gradient-to-r from-s-orange to-t-orange"
              data-aos="fade-up"
            >
              <p className="text-center mt-8 pt-2 text-white font-poppins">
                Jelajahi Sekarang!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-komoditas-1 w-full h-[1000px]">
        <div className="komoditasCover w-full h-[1000px]">
          <div className=" my-auto ml-20 pt-[400px]">
            <h1
              className=" text-8xl  font-Natural text-white"
              data-aos="fade-right"
            >
              Komoditas
            </h1>
            <h1
              className=" text-8xl  font-Natural text-white"
              data-aos="fade-right"
            >
              Baha
            </h1>
          </div>
        </div>
      </section>

      <section className="block bg-home-2 w-full h-fit lg:h-screen mb-10 lg:mb-0">
        {/* heading */}
        <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[100px]">
          <div className="mx-auto">
            <h1
              data-aos="fade-up"
              className="flex justify-center md:text-8xl text-6xl text-s-orange font-Natural"
            >
              Pemetaan
            </h1>
            <h1
              data-aos="fade-up"
              className="flex justify-center md:text-5xl text-4xl text-t-orange font-poppins font-bold"
            >
              Desa Baha
            </h1>
          </div>
        </div>
        {/* content */}
        <div className="block lg:flex justify-center">
          <div className="block w-full lg:w-[1553px] px-4">
            {/* card */}
            <Link href="/desa-baha/pemetaan/pemetaan-wisata">
              <div
                className="w-full h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8 "
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <div className="flex justify-center h-full mx-20 items-center">
                    <div className="block text-center" data-aos="fade-right">
                      <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                        Pemetaan
                      </h2>
                      <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                        Wisata
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="block lg:flex gap-8">
              <div
                className="w-full lg:w-1/2 h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8"
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <Link href="/desa-baha/pemetaan/pemetaan-mitigasi-bencana">
                    <div className="flex justify-center h-full mx-20 items-center">
                      <div className="block text-center" data-aos="fade-right">
                        <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                          Pemetaan
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                          Mitigasi Bencana
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8"
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <Link href="/desa-baha/pemetaan/pemetaan-umkm">
                    <div className="flex justify-center h-full mx-20 items-center">
                      <div className="block text-center" data-aos="fade-right">
                        <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                          Pemetaan
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                          UMKM
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block lg:flex gap-8">
              <div
                className="w-full lg:w-1/3 h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8"
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <Link href="/desa-baha/pemetaan/pemetaan-pertanian">
                    <div className="flex justify-center h-full mx-20 items-center">
                      <div className="block text-center" data-aos="fade-right">
                        <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                          Pemetaan
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                          Pertanian
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/3 h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8"
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <Link href="/desa-baha/pemetaan/pemetaan-perkebunan">
                    <div className="flex justify-center h-full mx-20 items-center">
                      <div className="block text-center" data-aos="fade-right">
                        <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                          Pemetaan
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                          Perkebunan
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/3 h-[192px] rounded-[30px] bg-wisata-card-sobangan bg-cover mt-8"
                data-aos="fade-up"
              >
                <div className="bg-n-blue bg-opacity-[64%] rounded-[30px] transition-colors duration-300 hover:bg-black hover:bg-opacity-[64%] w-full h-full">
                  <Link href="/desa-baha/pemetaan/pemetaan-peternakan">
                    <div className="flex justify-center h-full mx-20 items-center">
                      <div className="block text-center" data-aos="fade-right">
                        <h2 className="text-5xl lg:text-6xl text-white font-Natural">
                          Pemetaan
                        </h2>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gradient bg-gradient-to-b from-s-orange to-t-orange bg-clip-text text-transparent">
                          Peternakan
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block w-full lg:h-screen h-fit bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="block w-full h-fit py-1 lg:h-screen bg-pattern-1">
          {/* heading */}
          <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[100px]">
            <div className="mx-auto text-center">
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
                Desa Baha
              </h1>
            </div>
          </div>
          {/* content */}
          <div className="mt-10">
            <div className="relative flex items-center">
              <div className="items-center lg:pl-8 pl-3" data-aos="fade-right">
                <IoChevronBack
                  className="p-2 w-12 h-12 rounded-full text-white border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
                  onClick={() => swiper.slidePrev()}
                />
              </div>
              <Swiper
                className="w-full lg:w-[1382px]"
                data-aos="fade-up"
                onSwiper={(swiper) => setSwiper(swiper)}
                slidesPerView={3}
                spaceBetween={50}
                navigation
                breakpoints={{
                  300: {
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
                {wisata.map((val, index) => {
                  return(
                <SwiperSlide  className="h-full w-[424px] pb-8 xl:pb-16 px-2" key={index}>
                  {/* Card 1 */}
                  <SliderTourCard title={val.title} location={val.location} desc={val.desc} imageUrl={val.imageUrl} pageUrl={val.pageUrl}/>
                </SwiperSlide>
                  )
                })}
                {/* Add more SwiperSlides for additional cards */}
              </Swiper>
              <div className="lg:pr-8 pr-3">
                <IoChevronForward
                  className="p-2 w-12 h-12 rounded-full text-white border border-white hover:bg-w-yellow hover:text-n-blue cursor-pointer transition-all"
                  onClick={() => swiper.slideNext()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Desa_Baha;
