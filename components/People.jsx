import Image from 'next/image'
import React from 'react'
import { MessagesIcon } from './Icon'

const People = () => {
    return (
        <>
            <div className='pt-[39px] pb-[10px]'>
                <div className='max-w-[940px] w-full mx-auto  '>
                    <p className='text-[#363636] leading-normal text-[25px] sm:text-[40px] font-normal text-center '>WHAT PEOPLE SAY </p>
                    <p className='text-[#000] leading-normal  text-[12px] sm:text-[20px] font-normal text-center mt-2 '>How People Saved about education wordpress Theme.</p>
                    <p className='bg-[#363636] flex mx-auto w-[198px] h-[1px] mt-[21px] text-center '></p>
                    <div className='flex gap-10 justify-center mt-16 overflow-x-auto'>
                        <Image className='flex-shrink-0' src="/Img/a-img-1.png" width={73} height={73} alt="man-img" />
                        <Image className='flex-shrink-0' src="/Img/a-img-2.png" width={73} height={73} alt="man-img" />
                        <Image className='flex-shrink-0' src="/Img/a-img-3.png" width={73} height={73} alt="man-img" />
                        <Image className='flex-shrink-0' src="/Img/a-img-4.png" width={73} height={73} alt="man-img" />
                        <Image className='flex-shrink-0' src="/Img/a-img-5.png" width={73} height={73} alt="man-img" />
                    </div>
                    <p className='text-[#000] leading-normal  text-[12px] sm:text-[20px] font-medium text-center mt-2 '>Masual </p>
                    <p className='text-[#363636] leading-normal  text-[8px] sm:text-[12px] font-medium text-center'>Desource </p>
                    <p className=' text-[#000] leading-normal  text-[12px] sm:text-[20px] font-normal text-center mt-2 max-lg:px-3'>Learn press is a comprehensive LMS solution for wordpress. This wordpress LMS Plugin
                        can be used to easily creative &self courses online. Each course curriculum can be made with
                        lessons & quizzes which can be managed with easy to use user interface. it never gets easier
                        with learn press.</p>
                </div>
                <div className='max-md:px-3' >
                    <div className='max-w-[733px] w-full mx-auto pb-[50px] sm:pb-[120px] pt-[49px] sm:pt-[89px] mt-[27px] border-[3px] border-[#E8E8E8]'>
                        <p className='max-w-[720px] w-full max-md:px-1 mx-auto  text-[#363636] leading-normal  text-[12px] sm:text-[20px] font-normal text-center '>Subscribe now and receive weekly newsletter with educational material
                            new courses investing peoples. popular books and much move.</p>
                        <form className=' flex max-md:px-3 mt-[44px] max-sm:flex-col  max-sm:items-center  justify-center'>
                            <span className='flex  max-w-[374px] w-full border-[1px] items-center  justify-between border-[#363636] p-[8px] pr-4 '>
                                <input type="email" placeholder='Your Email here ' className='outline-none border-none text-[#363636] text-[20px]  font-normal w-full pr-2' />
                                <MessagesIcon />
                            </span>
                            <button className='p-[8px_19px] hover:bg-transparent max-sm:mt-[10px] bg-[#FFB200] text-[20px] font-normal border-[1px] border-[#FFB200] text-[#000]'>Subscribe </button>
                        </form>
                    </div>
                </div >
            </div>

        </>
    )
}

export default People








