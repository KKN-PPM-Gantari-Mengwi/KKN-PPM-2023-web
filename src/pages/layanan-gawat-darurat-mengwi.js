import React from "react";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout.jsx";
import Image from "next/image";
import Link from "next/link";
import AmbulanceImage from "../../public/images/assets/ambulance.png";

const Layanan_gawat_darurat = () => {
  const handleWhatsAppClick = (phoneNumber, message) => {
    // console.log("entry wa click")
    // console.log(phoneNumber)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-home-1 h-screen w-full">
        <div className="homeCover1  w-full h-full">
          <div className="md:pt-[430px] pt-[250px]">
            <div className="block z-0 text-center">
              <h1
                data-aos="fade-right"
                className="flex justify-center items-center text-t-orange my-auto -translate-x-5  md:text-8xl text-6xl font-Natural z-0"
              >
                Layanan Gawat Darurat
              </h1>
              <h1
                data-aos="fade-left"
                className="flex justify-center items-center text-white my-auto translate-x-5 -translate-y-3 md:text-8xl text-6xl font-Natural"
              >
                Mengwi
              </h1>
              <h3
                data-aos="fade-down"
                className="flex justify-center items-center text-white pt-2 text-xl font-poppins"
              >
                KKN PPM UGM Periode 2 Tahun 2023
              </h3>
            </div>

            <div
              data-aos="fade-up"
              className="mt-2 mx-auto h-[40px] w-[364px] rounded-[30px] bg-gradient-to-r from-s-orange to-t-orange"
            >
              <p className="flex justify-center items-center pt-2 text-white font-poppins">
                Jelajahi Sekarang!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section layanan gawat darurat desa baha */}
      <section className="block bg-home-2 w-full h-fit lg:h-screen mb-10 lg:mb-0">
        {/* heading */}
        <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[100px]">
          <div className="mx-auto text-center">
            <h1
              data-aos="fade-up"
              className="flex justify-center md:text-8xl text-6xl text-n-blue font-Natural"
            >
              Layanan Gawat Darurat
            </h1>
            <h1
              data-aos="fade-up"
              className="flex justify-center md:text-5xl text-4xl text-h-pink font-poppins font-bold"
            >
              Desa Baha
            </h1>
          </div>
        </div>
        {/* content */}
        <div className=" block lg:flex justify-between w-full px-3 lg:px-24 mt-10 lg:mt-24">
          {/* image */}
          <div className="w-1/2 relative hidden lg:block" data-aos="fade-right">
            <Image
              className=""
              src={AmbulanceImage}
              alt="ambulance image"
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          {/* Field */}
          <div className="w-full lg:w-1/2 block">
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Eka Yuliharti (Bidan)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 4470 8642
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Ni Wayan Evi (Bidan)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 4681 3199
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Ni Made Bika (Perawat)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 3958 5164
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Made Ariana (Sopir)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 857 3925 5059
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section layanan gawat darurat desa sobangan */}
      <section className="block w-full lg:h-screen h-fit bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="block w-full h-fit py-1 lg:h-screen bg-pattern-1">
          {/* heading */}
          <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[100px]">
            <div className="mx-auto text-center">
              <h1
                data-aos="fade-up"
                className="flex justify-center md:text-8xl text-6xl text-w-yellow font-Natural"
              >
                Layanan Gawat Darurat
              </h1>
              <h1
                data-aos="fade-up"
                className="flex justify-center md:text-5xl text-4xl text-white font-poppins font-bold"
              >
                Desa Sobangan
              </h1>
            </div>
          </div>
          {/* content */}
          <div className=" block lg:flex justify-between w-full px-3 lg:px-24 mt-10 lg:mt-24">
          {/* image */}
          <div className="w-1/2 relative hidden lg:block" data-aos="fade-right">
            <Image
              className=""
              src={AmbulanceImage}
              alt="ambulance image"
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          {/* Field */}
          <div className="w-full lg:w-1/2 block">
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Eka Yuliharti (Bidan)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 4470 8642
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Ni Wayan Evi (Bidan)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 4681 3199
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Ni Made Bika (Perawat)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 821 3958 5164
                  </p>
                </button>
              </div>
            </div>
            <div
              className="bg-l-pink rounded-[30px] flex justify-between h-[100px] lg:h-[80px] px-2 lg:px-8 items-center my-4"
              data-aos="fade-left"
            >
              {/* name */}
              <div data-aos="fade-left">
                <p className="text-lg lg:text-xl font-poppins text-n-blue font-semibold text-center lg:text-left">
                  Made Ariana (Sopir)
                </p>
              </div>
              {/* phone number */}
              <div
                className="bg-h-pink transition-colors duration-300 hover:bg-n-blue rounded-[30px] py-2 px-2 lg:px-8"
                data-aos="fade-left"
              >
                <button
                  onClick={handleWhatsAppClick.bind(
                    null,
                    "+6281330666660",
                    "hello hasan"
                  )}
                >
                  <p className="text-lg lg:text-xl font-poppins text-white font-semibold">
                    +62 857 3925 5059
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Layanan_gawat_darurat;
