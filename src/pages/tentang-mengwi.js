import React from 'react'
import DefaultLayout from "./../components/DefaultLayout/DefaultLayout.jsx";
import Image from "next/image";

const Tentang_Mengwi = () => {
  return (
    <DefaultLayout title="Gantari Mengwi 2023">
      <section className="bg-about-1 h-screen w-full">
        {/* <Navbar/> */}
        <div className="homeCover1  w-full h-full">
          <div className="md:pt-[430px] pt-[250px]">
            <div className="block z-0">
              <h1 className="flex justify-center items-center text-t-orange my-auto -translate-x-5  md:text-8xl text-6xl font-Natural z-0">
                Mengenal
              </h1>
              <h1 className="flex justify-center items-center text-white my-auto translate-x-5 -translate-y-3 md:text-8xl text-6xl font-Natural">
                Mengwi
              </h1>
              <h3 className="flex justify-center items-center text-white pt-2 text-xl font-poppins">
                KKN PPM UGM Periode 2 Tahun 2023
              </h3>
            </div>

            <div className="mt-2 mx-auto h-[40px] w-[364px] rounded-[30px] bg-gradient-to-r from-s-orange to-t-orange">
              <p className="flex justify-center items-center pt-2 text-white font-poppins">
                Jelajahi Sekarang!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-home-2 w-full h-screen">
        <div className="w-[1537px] h-[639px]  mx-auto my-auto mt-48 bg-gradient-to-r from-n-blue to-t-blue rounded-[30px]">
          <div className="flex justify-center text-6xl text-white font-Natural pt-12 ">
            Mengenal Mengwi
          </div>
          <div className="inline-flex">
          <div className="pt-16 pl-36">
            <Image
              src="/images/assets/peta-bali.png"
              width={600}
              height={600}
              alt="peta-bali"
            />
          </div>
          <div className="max-w-[648px] pt-24 pl-12">
            <p className="text-white text-lg font-poppins">
              Kecamatan Mengwi adalah sebuah kecamatan di Kabupaten Badung,
              Bali, Indonesia.[4] Kota Mangupura, ibukota kabupaten Badung
              berada di kecamatan ini, yang terdiri dari beberapa desa dan
              kelurahan di kecamatan Mengwi.
            </p>
            <div className="flex max-w-[275px] h-[45px] mt-40 bg-gradient-to-r from-s-orange to-t-orange items-center justify-center rounded-[30px] font-poppins text-xl text-white font-semibold">
              Selengkapnya
            </div>
          </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Tentang_Mengwi