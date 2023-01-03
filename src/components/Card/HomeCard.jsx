import React from "react";
import Image from "next/image";

const HomeCard = (props) => {
  return (
    <div className="lg:w-[580px] md:w-[500px] sm:w-[450px] w-[300px] md:h-[646px] h-[550px] bg-gradient-to-b from-[#043E52] to-[#016A6D] rounded-[45px]">
      {/* image card */}
      <div className="homeCardCover max-w-[519px] h-[372px] mx-auto block">
        <Image
          // src="/images/assets/desa-baha-1.png"
          src={props.image}
          width={519}
          height={372}
          layout={"responsive"}
          alt="desa-baha"
          className="mx-auto mt-6"
        />
      </div>
      <div className="md:mt-4 mt-1">
        <div className="mx-auto">
          <h3 className="flex justify-center text-white text-5xl font-bold font-Natural">
            Desa
          </h3>
          <h3 className="flex justify-center textGradOrange text-4xl font-bold font-poppins bg-gradient-to-b from-s-orange to-t-orange">
            {props.desa}
          </h3>
        </div>
      </div>
      <div className="flex mx-auto max-w-[275px] h-[45px] mt-8 bg-gradient-to-r from-s-orange to-t-orange items-center justify-center rounded-[30px] font-poppins text-xl text-white font-semibold">
        Selengkapnya
      </div>
    </div>
  );
};

export default HomeCard;
