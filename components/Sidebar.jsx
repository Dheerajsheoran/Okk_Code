import Link from 'next/link'
import React from 'react'
import { CrossIcon } from './Icon'

const Sidebar = ({ setFrist, first }) => {

    return (
        <>
            <div className=' bg-black h-full'>

                <div className='flex justify-end pr-4  pt-4'>

                </div>



                <div className="text-white text-[16px]  pr-4  pt-4'  not-italic font-medium font-Poppins flex flex-col items-center gap-5  w-full">
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
            </div>




        </>
    )
}

export default Sidebar