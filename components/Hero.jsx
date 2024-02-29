import { BookIcon, PenIcon, StarIcon } from './Icon'
import Nav from './Nav'

const Hero = () => {


  


    return (
        <>

            <Nav />
            <div className=" w-full mx-auto bg-[url(/Img/Hero-bg.png)] bg-no-repeat bg-cover bg-center flex items-center">
                <div className="max-w-[1166px] w-full mx-auto px-3 gap-5 pt-[126px] sm:pt-[226px] pb-[91px]">
                    <div>
                        <p className='text-[#FFF] text-[24px] sm:text-[32px] font-medium leading-normal  '>THE BEST THEME FOR </p>
                        <p className='text-[#FFF]  text-[50px] sm:text-[78px]  lg:text-[96px] font-medium leading-normal '>EDUCATION</p>
                        <button className='text-[#000] text-[20px] font-normal px-[34px] border border-[#FFB200] bg-[#FFB200] py-2 leading-normal hover:text-[#FFB200] hover:bg-transparent '>BUY NOW </button>
                    </div>
                    <div className='mt-[100px] sm:mt-[191px] flex justify-center gap-4 flex-wrap  ' >
                        <div className='flex gap-6 py-2 max-w-[370px] w-full justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.60)_99.89%,rgba(0,0,0,0.50)_99.89%);]'>
                            <div className='mt-4'>
                                <StarIcon />
                            </div>
                            <div>
                                <p className='w-[186px] text-[24px] font-semibold text-[#FFF] '>BEST INDUSTRY LEADERS </p>
                                <p className='w-[186px] text-[24px] font-semibold text-[#FFB200] '>VIEW MORE </p>
                            </div>

                        </div>


                        <div className='flex gap-6 py-2 max-w-[370px] w-full justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.60)_99.89%,rgba(0,0,0,0.50)_99.89%);]'>
                            <div className='mt-4'>
                                <PenIcon />
                            </div>
                            <div>
                                <p className='w-[197px] text-[24px] font-semibold text-[#FFF] '>LEARN COURSES ONLINE </p>
                                <p className='w-[186px] text-[24px] font-semibold text-[#FFB200] '>VIEW MORE </p>
                            </div>

                        </div>

                        <div className='flex gap-6 py-2 max-w-[370px] w-full justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.60)_99.89%,rgba(0,0,0,0.50)_99.89%);]'>
                            <div className='mt-4'>
                                <BookIcon />
                            </div>
                            <div>
                                <p className='w-[186px] text-[24px] font-semibold text-[#FFF] '>BOOK LIBRARY & STORE </p>
                                <p className='w-[186px] text-[24px] font-semibold text-[#FFB200] '>VIEW MORE </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero