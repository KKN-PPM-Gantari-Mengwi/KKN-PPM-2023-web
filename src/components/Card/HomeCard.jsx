import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCard = (props) => {
  return (
    <div
      className="2xl:w-[580px] xl:w-[500px] sm:w-[450px] w-[300px] 2xl:h-[646px] xl:h-[600px] h-[450px] bg-gradient-to-b from-[#043E52] to-[#016A6D] rounded-[45px]"
      data-aos={props.anime}
    >
      {/* image card */}
      <div className="homeCardCover max-w-[519px] md:h-[372px] h-[250px] mx-auto block">
        <Image
          // src="/images/assets/desa-baha-1.png"
          src={props.image}
          width={519}
          height={372}
          layout={"responsive"}
          alt="desa-baha"
          className="2xl:px-0 xl:px-4 2xl:mt-6 xl:mt-4"
        />
      </div>
      <div className="md:mt-4 mt-1">
        <div className="mx-auto" >
          <h3 className="flex justify-center text-white text-5xl font-bold font-Natural" data-aos="fade-up">
            Desa
          </h3>
          <h3 className="flex justify-center textGradOrange text-4xl font-bold font-poppins bg-gradient-to-b from-s-orange to-t-orange" data-aos="fade-up">
            {props.desa}
          </h3>
        </div>
      </div>
      <Link href={props.link}>
      <div
        className="flex mx-auto max-w-[275px] h-[45px] mt-8 bg-gradient-to-r from-s-orange to-t-orange items-center justify-center rounded-[30px] font-poppins text-xl text-white font-semibold"
        data-aos="fade-up"
      >
        Selengkapnya
      </div>
      </Link>
    </div>
  );
};

export default HomeCard;
