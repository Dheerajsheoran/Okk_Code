import React, { useEffect, useState } from "react";
import { HamburgrIcon, LogoIcon } from "./Icon";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Nav = () => {


    const [first, setFrist] = useState(false);
    useEffect(() => {
        if (first) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "100%"
            document.body.style.overflow = "auto";
        }  
        // Clean up the effect
        return () => {
            document.body.style.height = "100%"
            document.body.style.overflow = "auto";
        };
    }, [first]);

    return (
        <>
            <div className=" w-full mx-auto bg-[#000000] py-7 flex items-center">
                <div className="max-w-[1130px] w-full mx-auto flex justify-between items-center px-3 gap-5">
                    <LogoIcon />z

                    <div className="text-white text-[16px] max-lg:hidden not-italic font-medium font-Poppins flex justify-between max-w-[750px] w-full">
                        <Link className="hover:underline duration-300" href="/">
                            HOME
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            COURSES{" "}
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            FEATURES
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            EVENTS
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            GALLERY
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            BLOG
                        </Link>
                        <Link className="hover:underline duration-300" href="/">
                            CONTACT
                        </Link>
                    </div>

                    <button onClick={() => setFrist(!first)} className="text-white z-30 lg:hidden" >
                        <div className={`flex  flex-col ${first ? "gap-0" : "gap-2"}`}>
                            <div className={`w-[35px] h-[4px] rounded-[8px] bg-white ${first ? " rotate-45 " : "rotate-0 "}`}></div>
                            <div className={` h-[4px] rounded-[8px] duration-500 bg-white ${first ? " -rotate-45 w-[35px] -translate-y-1" : "rotate-0 w-[25px]"}`}></div>
                            <div className={` h-[4px] rounded-[8px] duration-500 bg-white ${first ? "w-0" : "w-[15px]"}`}></div>
                        </div>
                    </button>
                </div>
            </div>


            {/* sidebar--code */}

            <div className={`absolute top-0 duration-700 w-full ${first ? "translate-x-[0%] translate-y-[0%]" : " translate-y-[-150%] translate-x-[-150%]"}  h-full`}>
                <Sidebar setFrist={setFrist} first={first} />
            </div>


        </>
    );
};

export default Nav;








