import React from "react";
import DefaultLayout from "./../../components/DefaultLayout/DefaultLayout";
import TourismCard from "./../../components/Card/TourismCard.jsx";
import Dummy from "/public/images/assets/dummy-tour-1.png"
import Image from 'next/image'
import DummyMap from "/public/images/assets/peta-dummy.svg"
import Link from 'next/link'

const Pemetaan_Pertanian = () => {
    const handleImageClick = () => {
        window.open('/images/assets/peta-dummy.svg', '_blank');
      };
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-pemetaan-pertanian w-full h-[735px]">
        <div className="wisataCover1 w-full h-full">
          <div className="block z-0 pt-60">
            <h1 data-aos="fade-right" className="flex justify-center items-center text-t-orange my-auto translate-y-6 md:text-8xl text-6xl font-Natural z-0">
              Pemetaan
            </h1>
            <h1 data-aos="fade-left" className="flex justify-center items-center text-white my-auto md:text-8xl text-6xl font-Natural">
              Pertanian
            </h1>
          </div>
        </div>
      </section>
      <section className="flex w-full lg:h-screen h-fit  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="w-full h-full bg-pattern-1">
          <div className=" max-w-[1509px] h-fit bg-[#FAFAFA] mx-auto rounded-[30px] -translate-y-60">
            {/* Heading */}
            <div>
                <h2 className="text-4xl font-poppins font-semibold text-n-blue pt-10 pl-12">
                    Pemetaan Komoditas Pertanian
                </h2>
            </div>
            {/* peta section */}
            <div className="flex items-center">
                {/* peta image */}
                <div className=" ml-8 opacity-100 hover:opacity-50">
                    <a onClick={handleImageClick} className="cursor-pointer">
                    <Image
                    className="w-full h-full"
                    src={DummyMap}
                    width={100}
                    height={100}
                    alt="peta pemetaan pertanian"
                    />
                    </a>
                </div>
                {/* download button */}
                <div className="mx-auto">
                    <button className="transition-all bg-gradient-to-r from-s-orange to-t-orange  hover:from-n-blue hover:to-t-blue text-white rounded-[30px] px-16 py-2 font-poppins font-semibold text-lg">
                        Download Map
                    </button>
                </div>
            </div>
            
            {/* Heading */}
            <div>
                <h2 className="text-4xl font-poppins font-semibold text-n-blue pt-10 pl-12">
                    Pemetaan Hasil Pertanian
                </h2>
            </div>
            {/* peta section */}
            <div className="flex items-center">
                {/* peta image */}
                <div className=" ml-8 opacity-100 hover:opacity-50">
                    <a onClick={handleImageClick} className="cursor-pointer">
                    <Image
                    className="w-full h-full"
                    src={DummyMap}
                    width={100}
                    height={100}
                    alt="peta pemetaan pertanian"
                    />
                    </a>
                </div>
                {/* download button */}
                <div className="mx-auto">
                    <button className="transition-all bg-gradient-to-r from-s-orange to-t-orange  hover:from-n-blue hover:to-t-blue text-white rounded-[30px] px-16 py-2 font-poppins font-semibold text-lg">
                        Download Map
                    </button>
                </div>
            </div>

          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Pemetaan_Pertanian;
