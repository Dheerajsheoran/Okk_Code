import React from 'react'

const Courses = () => {
    return (
        <>
            <div className='bg-[url(/Img/Coursrs-bg-img.png)] bg-no-repeat bg-cover bg-center'>
                <div className='max-w-[1160px] w-full mx-auto pb-[35px] pt-[35px] px-[10px] items-center lg:gap-0 gap-9 flex flex-wrap lg:justify-between justify-center'>
                    <div className=''>
                        <p className=' max-w-[467px] w-full text-[#FFF] text-[14px] sm:text-start text-center sm:text-[20px] font-medium '>GET 100S OF ONLINE <span className='text-[#FFB200]'>COURSES FOR FREE </span></p>
                        <p className=' max-w-[467px] w-full text-[#FFF] text-[40px] sm:text-start  text-center sm:text-[64px] font-medium '>REGISTER NOW </p>
                        <div className='flex justify-center items-center flex-wrap  gap-3'>
                            <div className='rounded-[50%] border border-[#FFF] flex justify-center items-center flex-col w-[114px] h-[114px] text-center'>
                                <p className='text-[#FFF] font-semibold text-[36px]  '>66</p>
                                <p className='text-[#FFF] font-normal text-[20px] mt-[-12px]'>DAYS </p>
                            </div>
                            <div className='rounded-[50%] border border-[#FFF] flex justify-center items-center flex-col w-[114px] h-[114px] text-center'>
                                <p className='text-[#FFF] font-semibold text-[36px]  '>19</p>
                                <p className='text-[#FFF] font-normal text-[20px] mt-[-12px]'>HOURS </p>
                            </div>
                            <div className='rounded-[50%] border border-[#FFF] flex justify-center items-center flex-col w-[114px] h-[114px] text-center'>
                                <p className='text-[#FFF] font-semibold text-[36px]  '>47</p>
                                <p className='text-[#FFF] font-normal text-[20px] mt-[-12px]'>MINUTE </p>
                            </div>
                            <div className='rounded-[50%] border border-[#FFF] flex justify-center items-center flex-col w-[114px] h-[114px] text-center'>
                                <p className='text-[#FFF] font-semibold text-[36px]  '>50</p>
                                <p className='text-[#FFF] font-normal text-[20px] mt-[-12px]'>SECONDS </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white max-w-[381px] w-full'>
                        <div className=' max-w-[381px] h-[191px] p-[43px_38px_58px] w-full bg-[url(/Img/Bg-img.png)] bg-no-repeat bg-cover bg-center'>
                            <p className='max-w-[305px] w-full mx-auto text-[#FFF] text-[16px] sm:text-[21px] font-medium '>Create your free account now
                                and get immediate access to
                                100s of online courses.</p>
                        </div>
                        <div className='px-[16px] pb-5'>
                            <form action="">
                                <input className='max-w-[348px] outline-none mt-3 w-full h-[45px] border  border-[rgba(0,0,0,0.24)] mx-auto pl-[10px]' type="text" placeholder='YOUR NAME:- ' />
                                <input className='max-w-[348px] outline-none mt-3 w-full h-[45px] border  border-[rgba(0,0,0,0.24)] mx-auto pl-[10px]' type="email" placeholder='EMAIL:-  ' />
                                <input className='max-w-[348px] outline-none mt-3 w-full h-[45px] border  border-[rgba(0,0,0,0.24)] mx-auto pl-[10px]' type="number" placeholder='PHONE NO:-  ' />
                                <button className='max-w-[306px] mt-7 py-[11px] w-full text-white bg-black mx-auto flex justify-center text-[12px] sm:text-[20px] font-normal border border-[#000] hover:text-[#000] hover:bg-transparent   ' >GET IT NOW </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses