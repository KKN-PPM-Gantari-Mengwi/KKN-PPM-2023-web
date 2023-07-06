import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar.jsx";
import Link from 'next/link';
import DefaultLayout from "./../components/DefaultLayout/DefaultLayout.jsx";
import Image from "next/image";

import HomeCard from "./../components/Card/HomeCard.jsx";

import DesaBahaImage from "./../../public/images/assets/desa-baha-1.png";
import DesaSobanganImage from "./../../public/images/assets/desa-sobangan-1.png";
export default function Home() {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-home-1 h-screen w-full">
        {/* <Navbar/> */}
        <div className="homeCover1  w-full h-full">
          <div className="2xl:pt-[340px] pt-[250px]">
            <div className="block z-0">
              <h1
                className="flex justify-center items-center text-t-orange my-auto -translate-x-5  md:text-9xl text-6xl font-Natural z-0"
                data-aos="fade-left"
              >
                Pesona
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
      <section className="flex bg-home-2 w-full h-screen">
        <div className="2xl:w-[1537px] xl:w-[1300px] 2xl:h-[639px]  xl:h-[600px] sm:-[700px]  mx-auto my-auto 2xl:mt-48 mt-20 bg-gradient-to-r from-n-blue to-t-blue rounded-[30px]">
        
          <div
            className="flex justify-center lg:text-7xl text-6xl text-white font-Natural pt-12 "
            data-aos="fade-down"
          >
            
            Mengenal Mengwi
            
          </div>
          
          <div className="lg:inline-flex block">
            <div
              data-aos="fade right"
              className="pt-16 lg:pl-36 pl-10 max-w-[600px] lg:h-[600px] block"
            >
              <Image
                src="/images/assets/peta-bali.png"
                width={600}
                height={600}
                // layout={"responsive"}
                alt="peta-bali"
              />
            </div>
            <div data-aos="fade-left" className="block  max-w-[648px] lg:pt-24 pt-2 pl-12">
              <p className="text-white text-lg font-poppins">
                Kecamatan Mengwi adalah sebuah kecamatan di Kabupaten Badung,
                Bali, Indonesia.[4] Kota Mangupura, ibukota kabupaten Badung
                berada di kecamatan ini, yang terdiri dari beberapa desa dan
                kelurahan di kecamatan Mengwi.
              </p>
              <Link href="/pemetaan-mengwi">
              <div data-aos="fade-up" className="flex max-w-[275px] h-[45px] lg:mt-40 mt-16 mb-4 bg-gradient-to-r from-s-orange to-t-orange items-center justify-center rounded-[30px] font-poppins text-xl text-white font-semibold">
                Selengkapnya
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="block w-full lg:h-screen h-[1600px]  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="blockh-screen w-full bg-pattern-1">
          {/* headline */}
          <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[270px]">
            <div className="mx-auto">
              <h1 data-aos="fade-up" className="flex justify-center md:text-7xl text-6xl text-white font-Natural">
                Desa KKN
              </h1>
              <h1 data-aos="fade-up" className="flex justify-center md:text-5xl text-4xl text-white font-poppins font-bold">
                Gantari-Mengwi
              </h1>
            </div>
          </div>
          {/* card container */}
          <div className="flex justify-center mt-8">
            <div className="lg:flex block gap-16">
              <HomeCard image={DesaBahaImage} desa="Baha" anime="fade-right" link="/desa-baha" />
              <HomeCard image={DesaSobanganImage} desa="Sobangan" anime="fade-left" link="/desa-sobangan" />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
