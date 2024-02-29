import Image from 'next/image'
import React from 'react'

const Upcoming = () => {
    return (
        <>
            <div className='max-w-[1140px] w-full bg-white pb-[66px] pt-[86px] max-xl:px-3 mx-auto'>
                <div className='sm:flex   justify-between items-start '>
                    <div>
                        <p className=' text-[#000] text-[30px] sm:text-[40px] font-medium '>EVENTS </p>
                        <p className=' text-[#363636] text-[14px] sm:text-[24px] opacity-50 font-normal '>Upcoming Education Events to feed your brain.</p>
                        <p className='w-[121px] bg-[#363636] opacity-50 mt-5 h-[1px]  '></p>
                    </div>
                    <button className='hover:bg-black hover:text-[#FFF] text-[#363636] text-[16px] md:text-[20px] max-sm:mt-3 font-medium  p-[7px_16px]  md:p-[10px_38px] border-[2px] border-black '><p className='opacity-50'>VIEW ALL</p> </button>
                </div>
                <div className='flex max-lg:flex-col items-center justify-center mt-10 border-y-2 max-lg:border-r-2 border-l-2'>
                    <div className='max-w-[683px] flex-wrap text-center px-3 w-full flex justify-around '>
                        <div className=' pt-7 '>
                            <p className=' text-[#FFB200] font-medium text-[44px] sm:text-[64px] leading-none '>30</p>
                            <p className=' text-[#FFB200] font-medium text-[12px] sm:text-[16px] leading-none '>May</p>
                        </div>
                        <div className='max-w-[501px] pt-9 pb-16 w-full'>
                            <p className=' text-[#000] text-[16px] sm:text-[24px] font-bold leading-normal '>Eduma  Autumn 2017 </p>
                            <p className=' text-[#000] text-[16px] sm:text-[24px] font-normal leading-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>

                    </div>
                    <div>
                        <Image src="/Img/Image.png" width={475} height={219} alt='img' />
                    </div>
                </div>
                <div className='flex max-lg:flex-col items-center justify-center border-y-2 max-lg:border-r-2 border-l-2 mt-10'>
                    <div className='max-w-[683px] flex-wrap text-center px-3 w-full flex justify-around  '>
                        <div className=' pt-7 '>
                            <p className=' text-[#FFB200] font-medium text-[44px] sm:text-[64px] leading-none '>18</p>
                            <p className=' text-[#FFB200] font-medium text-[12px] sm:text-[16px] leading-none '>September </p>
                        </div>
                        <div className='max-w-[501px] pt-9 pb-16 w-full'>
                            <p className=' text-[#000] text-[16px] sm:text-[24px] font-bold leading-normal '>Elegant Light Box Paper Cut Diaramas  </p>
                            <p className=' text-[#000] text-[16px] sm:text-[24px] font-normal leading-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>

                    </div>
                    <div>
                        <Image src="/Img/Rectangle.png" width={475} height={219} alt='img' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Upcoming