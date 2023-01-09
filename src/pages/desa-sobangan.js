import React from "react";
import DefaultLayout from "./../components/DefaultLayout/DefaultLayout.jsx";

const Desa_Sobangan = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-sobangan-1 h-screen w-full">
        <div className="sobanganCover w-full h-screen">
          <div className=" my-auto ml-[1500px] pt-[400px]">
            <h1 className="pl-20 text-8xl  font-Natural text-white" data-aos="fade-left">Desa</h1>
            <h1 className=" text-8xl  font-Natural text-white" data-aos="fade-left">Sobangan</h1>
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
    </DefaultLayout>
  );
};

export default Desa_Sobangan;
