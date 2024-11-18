import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Frame from "../assets/frame.png"

const Make = () => {
  return (
    <Container>
        <Flex className="items-center justify-between bg-Gray rounded-[45px]">
         <div className="w-[50%] p-[50px]">
                <h4 className='font-pops text-[#222] text-[35px] font-semibold'>Let’s make things happen</h4>
                <p className='font-pops text-[#222] text-[16px] font-normal py-[26px]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <button className='border-2 border-[#222] hover:bg-[#222] hover:text-[#fff] px-[35px] py-[20px] rounded-[14px] text-[20px] duration-500'>Get your free proposal</button>
            </div>
            <div className="w-[50%]">
                <picture>

                    <img src={Frame} className='w-full h-full' alt="" />
                </picture>
            </div>
        </Flex>
        <div className="pt-[140px] pb-[85px]">
        <div className="flex items-center">
        <h4 className='text-[#222] bg-GreenColor inline text-[30px] text-center font-pops'>Case Studies</h4>
        <p className='w-[710px] font-pops text-[#222] text-[17px] pl-[40px]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
      </div>
      <div className="">
        
      </div>
    </Container>
  )
}

export default Make