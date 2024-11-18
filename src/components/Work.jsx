import React from 'react'
import Container from './Container'
import Flex from './Flex'

import { CiCircleMinus } from "react-icons/ci";

const Work = () => {
  return (
    <Container>
            <div className="pt-[140px] pb-[85px]">
        <div className="flex items-center">
          <h4 className='text-[#222] bg-GreenColor inline text-[30px] text-center font-pops'>Our Working Process </h4>
          <p className='w-[400px] font-pops text-[#222] text-[16px] pl-[40px]'>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
      </div>
        <Flex className="flex-wrap gap-y-5">
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>01</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[800px]'>Consultation</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>02</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[450px]'>Research and Strategy Development</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>03</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[740px]'>Implementation</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>04</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[580px]'>Monitoring and Optimization</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>05</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[550px]'>Reporting and Communication</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
           <div className="flex items-center px-[60px] py-[41px] border-2 border-[#222] rounded-[45px] border-b-8 border-b-[#222]">
             <span className='font-medium font-pops text-[60px] text-[#222]'>06</span>
            <h4 className='font-medium font-pops text-[30px] text-[#222] pl-[80px] pr-[620px]'>Continual Improvement</h4>
            <CiCircleMinus className='text-[60px]'/>
           </div>
        </Flex>
    </Container>
  )
}

export default Work