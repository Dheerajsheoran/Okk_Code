import Image from "next/image";
import Link from "next/link";
import React from "react";

const Latest = () => {
    return (
        <>
            <div className="bg-[url(/Img/Natest-new-bg.png)] bg-cover bg-no-repeat bg-center px-3 py-[36px] ">
                <div className="max-w-[1140px] w-full mx-auto">
                    <div className="flex justify-between max-[424px]:justify-center gap-5 flex-wrap">
                        <div>
                            <p className="text-[#FFF] font-Inter text-[24px] sm:text-[40px] font-medium leadingg-[normal]">
                                Latest News{" "}
                            </p>
                            <p className="text-[#FFF] font-Inter text-[18px] sm:text-[20px] font-normal leadingg-[normal]">
                                Education news all over the world.
                            </p>
                            <div className="w-[69px] h-[1px] bg-white mt-[20px]"></div>
                        </div>

                        <Link
                            href="/"
                            className="text-[#fff] font-Inter text-[20px] hover:text-[#FFB200] w-[90px] h-6 duration-300 hover:scale-125 link-bor not-italic font-normal leading-[normal]"
                        >
                            See more
                        </Link>
                    </div>

                    {/* img-------------content */}
                    <div className="mt-6 flex gap-5 flex-wrap justify-center xl:justify-between">
                        <div className="max-w-[318px] justify-center items-center flex flex-col w-full">
                            <Image src="/Img/c-img-2.png" width={318} height={360} alt="img"  />
                            <p className="text-[#fff] font-Inter text-[24px] not-italic font-normal text-center pt-[19px]">
                                online learning Glossary{" "}
                            </p>
                        </div>

                        <div className="max-w-[410px] mx-aut justify-center items-center flex flex-col w-full">
                            <Image src="/Img/c-img-2.png" width={318} height={360}  alt="img" />
                            <p className="text-[#fff] font-Inter text-[24px] not-italic font-normal text-center pt-[19px]">
                                Tips to succeed in an online course{" "}
                            </p>
                        </div>

                        <div className="max-w-[328px] justify-center items-center flex flex-col w-full">
                            <Image src="/Img/c-img-4.png" width={318} height={360}  alt="img" />
                            <p className="text-[#fff] font-Inter text-[24px] not-italic font-normal text-center pt-[19px]">
                                Introducing Dr. Denie zeynep{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Latest;