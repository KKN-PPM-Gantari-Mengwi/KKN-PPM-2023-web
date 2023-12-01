import React from "react";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout.jsx";
import Image from "next/image";
import Link from "next/link";

const Pemetaan_Mengwi = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-home-1 h-screen w-full">
        <div className="homeCover1  w-full h-full">
          <div className="md:pt-[430px] pt-[250px]">
            <div className="block z-0">
              <h1
                data-aos="fade-right"
                className="flex justify-center items-center text-t-orange my-auto -translate-x-5  md:text-8xl text-6xl font-Natural z-0"
              >
                Pemetaan
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
      {/* section pemetaan desa baha */}
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
      {/* section pemetaan desa sobangan */}
      <section className="block w-full lg:h-screen h-[1600px]  bg-gradient-to-b from-[#DF693B] to-[#F99A57]">
        <div className="block w-full h-screen bg-pattern-1">
          {/* heading */}
        <div className="flex xl:pt-20 lg:pt-32 md:pt-48 sm:pt-80 pt-[100px]">
          <div className="mx-auto">
            <h1
              data-aos="fade-up"
              className="flex justify-center md:text-8xl text-6xl text-w-yellow font-Natural"
            >
              Pemetaan
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
        <div className="block lg:flex justify-center">
          <div className="block w-full lg:w-[1553px] px-4">
            {/* card */}
            <Link href="/desa-sobangan/pemetaan/pemetaan-wisata">
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
                  <Link href="/desa-sobangan/pemetaan/pemetaan-mitigasi-bencana">
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
                  <Link href="/desa-sobangan/pemetaan/pemetaan-umkm">
                  
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
                  <Link href="/desa-sobangan/pemetaan/pemetaan-pertanian">
                  
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
                  <Link href="/desa-sobangan/pemetaan/pemetaan-perkebunan">
                  
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
                  <Link href="/desa-sobangan/pemetaan/pemetaan-peternakan">
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
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Pemetaan_Mengwi;
