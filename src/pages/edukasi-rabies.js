import React from "react";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import TourismCard from "../components/Card/TourismCard.jsx";
import Dummy from "./../../public/images/assets/dummy-tour-1.png"

const videoUrl = "https://www.youtube.com/embed/rkfP4lERGnE";

const EdukasiRabies = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-edukasi-rabies w-full h-[735px]">
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
            {/* Heading */}
            <div className="md:px-8 py-8">
              <h2
                data-aos="fade-up"
                className="md:text-4xl text-3xl font-poppins font-semibold text-n-blue md:pl-12 text-center"
              >
                Video
              </h2>
              <div
                className="aspect-[16/9] w-3/4 mt-8 mx-auto"
                data-aos="fade-up"
              >
                <iframe
                  className="w-full h-full rounded-3xl bg-n-blue"
                  src={videoUrl}
                  title="YouTube Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default EdukasiRabies;
