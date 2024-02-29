import React from "react";
import { GmailIcon, LogoIcon, MultiimgIcon, PhnIcon } from "./Icon";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#000000] opacity-[0.9]  pt-[55px] pb-[18px] px-3">
                <div className="max-w-[973px] w-full mx-auto  gap-[30px] gap-y-[50px]  grid lg:grid-cols-4 grid-cols-1  sm:grid-cols-2">
                    {/* logo--section */}

                    <div className="flex flex-col gap-y-[19px]  sm:mx-auto">
                        <LogoIcon />
                        <span className="flex gap-[12.49px]">
                            <PhnIcon />
                            <p className="text-white font-Poppins text-[12px] not-italic font-semibold leading-[normal]">
                                0123546780
                            </p>
                        </span>

                        <span className="flex gap-[12.49px]">
                            <GmailIcon />
                            <p className="text-white font-Poppins text-[12px] not-italic font-semibold leading-[normal]">
                                hello @gmail.com
                            </p>
                        </span>

                        <Link href="/">
                            {" "}
                            <MultiimgIcon />
                        </Link>
                    </div>

                    <div className=" sm:mx-auto">
                        <p className="text-[#fff] font-Poppins text-[16px] not-italic font-semibold leading-[normal]">
                            Company{" "}
                        </p>

                        <div className="pt-[19px] flex flex-col gap-y-[17px] text-white">
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                About us{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Blog{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Contact{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Become a Teacher{" "}
                            </Link>
                        </div>
                    </div>

                    <div className=" sm:mx-auto">
                        <p className="text-[#fff] font-Poppins text-[16px] not-italic font-semibold leading-[normal]">
                            Links{" "}
                        </p>

                        <div className="pt-[19px] flex flex-col gap-y-[17px] text-white">
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Courses
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Events
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Gallery
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                FAQS
                            </Link>
                        </div>
                    </div>

                    <div className=" sm:mx-auto">
                        <p className="text-[#fff] font-Poppins text-[16px] not-italic font-semibold leading-[normal]">
                            Support{" "}
                        </p>

                        <div className="pt-[19px] flex flex-col gap-y-[17px] text-white">
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                DOCUMENTATION{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Forms{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Language Policy{" "}
                            </Link>
                            <Link
                                className="hover:text-[#FFB200] hover:scale-110 duration-300"
                                href="/"
                            >
                                Review status{" "}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1140.792px] w-full mx-auto h-[1px] bg-white my-[47px] "></div>

                <div className="max-w-[1140.792px] w-full mx-auto flex items-center justify-center md:justify-between gap-8 flex-wrap">
                    <p className="text-[#fff] max-sm:text-center font-Poppins text-[12px] not-italic leading-[normal]">
                        <span className="text-[#FFB200]">Education Wordpress Theme</span> by{" "}
                        <span className="text-[#FFB200]">Theme press</span> powered by
                        wordpress{" "}
                    </p>

                    <div className="max-w-[255px] w-full flex justify-between">
                        <Link
                            className="text-[#fff] font-Poppins text-[12px] not-italic font-semibold leading-[normal]"
                            href="/"
                        >
                            Privacy{" "}
                        </Link>

                        <Link
                            className="text-[#fff] font-Poppins text-[12px] not-italic font-semibold leading-[normal]"
                            href="/"
                        >
                            Terms{" "}
                        </Link>

                        <Link
                            className="text-[#fff] font-Poppins text-[12px] not-italic font-semibold leading-[normal]"
                            href="/"
                        >
                            Bitmap{" "}
                        </Link>

                        <Link
                            className="text-[#fff] font-Poppins text-[12px] not-italic font-semibold leading-[normal]"
                            href="/"
                        >
                            Parthers{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;