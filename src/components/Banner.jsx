
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import BanImg from "../assets/banner.png"

const Banner = () => {
  return (
   <Container>
    <Flex className="pt-[70px]">
        <div className="w-[50%]">
            <h2 className='w-[490px] font-italic text-[#222] text-[50px]'>Navigating the digital landscape for success</h2>
            <p className='w-[437px] font-italic text-[#222] text-[16px] py-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

            <button className='px-[35px] py-[20px] text-[#222] hover:bg-[#222] hover:text-[#fff] border-2 border-[#222] duration-500'>Book a consultation</button>
        </div>
        <div className="w-[50%]">
            <picture>
                <img src={BanImg} className='w-full h-full' alt="" />
            </picture>
        </div>
    </Flex>
   </Container>
  )
}

export default Banner