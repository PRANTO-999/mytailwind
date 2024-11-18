import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { RiDownload2Fill } from "react-icons/ri";

const Case = () => {
  return (
    <Container>
      <div className="pt-[140px] pb-[85px]">
        <div className="flex items-center">
          <h4 className='text-[#222] bg-GreenColor w-[164px] inline text-[30px] text-center font-pops'>Services</h4>
          <p className='w-[760px] font-pops text-[#222] text-[11px] pl-[40px]'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
      </div>
      <Flex className=" bg-[#222] pl-[60px] pt-[70px] pb-[93px] pr-[60px] rounded-[45px] justify-between">  
      <div className="">
          <p className='text-[#fff] text-[16px] font-pops font-normal w-[286px] pb-[20px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='flex items-center' >
            <RiDownload2Fill className='text-GreenColor'/>
            <p className='text-GreenColor text-[16px] font-pops font-normal pl-[10px]'>Learn more</p>
            </div>
         </div>
        <div className="relative after:absolute after:w-[2px] after:h-[120px] after:bg-[#fff] after:top-[50%] after:left-[-100px] after:translate-y-[-50%] ">
        <p className='text-[#fff] text-[16px] font-pops font-normal w-[286px] pb-[20px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='flex items-center' >
            <RiDownload2Fill className='text-GreenColor'/>
            <p className='text-GreenColor text-[16px] font-pops font-normal pl-[10px]'>Learn more</p>
            </div>
        </div>
        <div className="relative after:absolute after:w-[2px] after:h-[120px] after:bg-[#fff] after:top-[50%] after:left-[-100px] after:translate-y-[-50%] ">
        <p className='text-[#fff] text-[16px] font-pops font-normal w-[286px] pb-[20px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='flex items-center' >
            <RiDownload2Fill className='text-GreenColor'/>
            <p className='text-GreenColor text-[16px] font-pops font-normal pl-[10px]'>Learn more</p>
            </div>
        </div>
      </Flex>
    </Container>
  )
}

export default Case