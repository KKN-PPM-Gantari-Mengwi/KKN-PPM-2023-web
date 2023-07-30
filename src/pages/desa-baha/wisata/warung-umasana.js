import React from "react";
import DefaultLayout from "./../../../components/DefaultLayout/DefaultLayout";
import TourismCard from "./../../../components/Card/TourismCard.jsx";
import Dummy from "/public/images/assets/dummy-tour-1.png";
import Image from "next/image";
import DummyMap from "/public/images/assets/peta-dummy.svg";
import Link from "next/link";

const fasilitas = ["Toilet", "Wifi"];
const galleryImg = [
  "/images/timeline/1.jpg",
  "/images/timeline/2.jpg",
  "/images/timeline/3.jpg",
  "/images/timeline/4.jpg",
  "/images/timeline/5.jpg",
  "/images/timeline/6.jpg",
];
const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
const HTM = "Sesuai makanan dan minuman yang dipesan";

const Warung_Umasana = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-wisata-1 w-full h-[735px]">
        <div className="wisataCover1 w-full h-full">
          <div className="block z-0 pt-60 ">
            <h1
              data-aos="fade-right"
              className="flex justify-center items-center text-t-orange my-auto translate-y-6 md:text-8xl text-6xl font-Natural z-0 text-center"
            >
              Wisata
            </h1>
            <h1
              data-aos="fade-left"
              className="flex justify-center items-center text-white my-auto md:text-8xl text-6xl font-Natural text-center"
            >
              Warung Umasana
            </h1>
          </div>
        </div>
      </section>
      <section className="flex w-full  h-fit  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="w-full h-full bg-pattern-1">
          <div className=" max-w-[1509px] h-fit bg-[#FAFAFA] mx-auto rounded-[30px] -translate-y-60">
            {/* descriptiom */}
            <div className="md:px-8 px-2 py-4">
              <p
                data-aos="fade-up"
                className="md:text-2xl text-xl font-poppins font-medium text-black pt-10 pl-12 pr-12 text-center"
              >
                Warung Umasana terletak di salah satu ujung jogging track.
                Warung ini terletak di tengah-tengah hamparan sawah sehingga
                wisatawan dapat menikmati pemandangan sawah sambil menikmati
                makanan ringan dan minuman yang disajikan. Harga makanan dan
                minumannya pun sangat terjangkau berkisar Rp. 1,000 – Rp.
                10,000. Jenis makanan nya beragam mulai dari makanan ringan
                seperti jajanan pasar, hingga makanan berat seperti nasi jingo,
                nasi babi guling, mie goreng, dan lain sebagainya. Untuk
                minumannya juga tersedia minuman tradisional seperti es gula,
                kopi jos, dan berbagai jenis wedangan.
              </p>
            </div>
            {/* fasilitas and HTM section */}
            <div className="md:flex block px-8 py-6">
              {/* peta image */}
              <div data-aos="fade-left" className="md:w-1/2 w-full md:pl-12">
                <h2
                  data-aos="fade-up"
                  className="md:text-4xl text-3xl font-poppins font-semibold text-n-blue pt-10 text-center"
                >
                  Fasilitas
                </h2>
                <div className="pt-4 flex justify-center">
                  <ul className="list-disc md:text-2xl text-xl font-semibold">
                    {fasilitas.map((item, index) => (
                      <li key={index} className="pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* download button */}
              <div data-aos="fade-right" className="md:w-1/2 w-full md:pl-12">
                <h2
                  data-aos="fade-up"
                  className="md:text-4xl text-3xl font-poppins font-semibold text-n-blue pt-10 text-center"
                >
                  HTM
                </h2>
                <div className="pt-4 flex justify-center">
                  <ul className="list-disc md:text-2xl text-xl font-semibold">
                    <li>{HTM}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="md:px-8  pt-1 pb-8">
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
            {/* Heading */}
            <div className="md:px-8 px-2 pt-1 pb-12">
              <h2
                data-aos="fade-up"
                className="md:text-4xl text-3xl font-poppins font-semibold text-n-blue md:pl-12 text-center"
              >
                Gallery
              </h2>
              <div className="w-4/5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-8 mx-auto">
                {galleryImg.map((item, index) => (
                  <div key={index} className="" data-aos="fade-up">
                    <Image
                      alt="card gallery wisata image"
                      src={item}
                      className="rounded-[30px] hover:scale-105 shadow-xl "
                      width={399}
                      height={223}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Warung_Umasana;
