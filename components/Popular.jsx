import React from "react";
import Image from "next/image";
// import Viewmorebtn from "./Viewmorebtn";
import { popmap } from "./Helper";

const Popularcourse = () => {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto pt-[84px] pb-[71px] mb-[71px]">
        <div className="max-w-[1139px] mx-auto px-3 w-full">
          <div className="flex justify-between items-center flex-wrap max-[370px]:justify-center">
            <p className="text-[#363636] font-Inter not-italic font-medium">
              <span className="underline">POP</span>ULAR COURSES{" "}
            </p>

            <div className="z-30">
              {/* <Viewmorebtn /> */}
            </div>
          </div>
        </div>

        {/* card--maapipng */}
        <div className="flex gap-6 flex-wrap justify-center mt-[55px] px-3">
          {popmap.map((item, index) => (
            <div key={index} className="relative max-w-[267px] w-full bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <Image src={item.img} width={267} height={302} alt="caed-one" />
              <Image
                className="absolute left-[118px] top-[290px]"
                src={item.imgmini}
                width={33}
                height={33}
                alt="caed-one"
              />

              <h1 className="text-[#363636] leading-[normal] font-Poppins text-[16px] not-italic font-normal text-center mt-[35px]">
                {item.heading}
              </h1>

              <p className="text-[#000] px-[6px] text-center font-Poppins text-[16px] not-italic font-normal leading-[normal] pt-3 max-w-[254px] w-full">
                {item.content}
              </p>

              <div className="max-w-[267px] w-full h-[1px] bg-black mt-[22px]"></div>

              <div className="flex gap-[7px] px-3 py-[23px]">
                {item.Cart}
                <p className="text-[#363636] text-center font-Poppins text-[16px] not-italic font-normal leading-[normal]">
                  462
                </p>
                {item.message}
                <p className="text-[#363636] text-center font-Poppins text-[16px] not-italic font-normal leading-[normal]">
                  2
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popularcourse;







