import React from "react";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import TourismCard from "../components/Card/TourismCard.jsx";
import Dummy from "./../../public/images/assets/dummy-tour-1.png"

const EdukasiRabies = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-wisata-1 w-full h-[735px]">
        <div className="wisataCover1 w-full h-full">
          <div className="block z-0 pt-60">
            <h1 data-aos="fade-right" className="flex justify-center items-center text-t-orange my-auto translate-y-6 md:text-8xl text-6xl font-Natural z-0">
              Edukasi
            </h1>
            <h1 data-aos="fade-left" className="flex justify-center items-center text-white my-auto md:text-8xl text-6xl font-Natural">
              Rabies
            </h1>
          </div>
        </div>
      </section>
      <section className="flex w-full lg:h-screen h-[1600px]  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="w-full h-full bg-pattern-1">
          <div className=" max-w-[1509px] md:h-[1100px] h-[1300px] bg-[#FAFAFA] mx-auto rounded-[30px] -translate-y-60">
            {/* filter items */}
            <div className="flex justify-center pt-6 text-xl font-poppins font-semibold ">
              <button data-aos="fade-up" className="px-4 hover:text-s-orange">Semua</button>
              <button data-aos="fade-up" className="px-4 hover:text-s-orange">Baha</button>
              <button data-aos="fade-up" className="px-4 hover:text-s-orange">Sobangan</button>
            </div>
            {/* card items */}
            {/* <div className="block justify-center"> */}
            <div className="mx-32">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8 mx-auto">
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                <TourismCard image={Dummy} wisata="Wisata Hiling-Hiling" desa="desa Konoha" desc="sebuat wisata di desa konoha yang menyediakan aktifitas hiling-hiling"/>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default EdukasiRabies;
