import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Mask from "../assets/mask.png"

const Team = () => {
  return (
    <Container>
            <div className="pt-[140px] pb-[85px]">
        <div className="flex items-center">
          <h4 className='text-[#222] bg-GreenColor inline text-[30px] text-center font-pops'>Team</h4>
          <p className='w-[400px] font-pops text-[#222] text-[16px] pl-[40px]'>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
      </div>
        <Flex className="py-5">
           <div className="flex border-2 border-[#222] px-[35px] pt-[40px] pb-[63px] rounded-[45px]">
          <div className="">
          <picture>
             <img src={Mask} alt="" />
            </picture>
          </div>
            <div className=" pt-[55px] inline">
                <p>John Smith</p>
                <p>CEO and Founder</p>
            </div>
            <div className="">
            <p className='font-pops text-[16px] text-[#222] w-[317px]'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
            </div>
           </div>
        </Flex>
    </Container>
  )
}

export default Team