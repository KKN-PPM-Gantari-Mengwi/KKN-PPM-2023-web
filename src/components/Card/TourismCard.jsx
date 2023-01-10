import React from 'react'
import Image from 'next/image'

const TourismCard = (props) => {
  return (
    <div data-aos="fade-up" className="w-[362.44px] h-[450px] bg-white shadow-lg rounded-[15px] mx-auto">
        {/* h awal = 411px */}
        <Image
          // src="/images/assets/desa-baha-1.png"
          src={props.image}
          width={362.44}
          height={244.49}
        //   layout={"responsive"}
          alt="desa-baha"
          className="mx-auto mt-6"
        />
      
      <div className="md:mt-4 mt-1 ml-4">
        <div className="mx-auto">
          <h3 className="flex justify-start text-2xl font-bold font-poppins">
            {props.wisata}
          </h3>
          <h3 className="flex justify-start textGradOrange text-xl font-bold font-poppins bg-gradient-to-b from-s-orange to-t-orange">
            {props.desa}
          </h3>
        </div>
      </div>
      <p className="mt-4 mx-4">
        {props.desc}
      </p>
    </div>
  )
}

export default TourismCard