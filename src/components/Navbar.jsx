import React from 'react'
import Container from './Container'
import Flex from './Flex'
import LogoImg from "../assets/logo.png"

const Navbar = () => {
  return (
   <Container>
     <Flex className="justify-between items-center">
      <div className="">
        <picture>
          <img src={LogoImg} alt="" />
        </picture>
      </div>
      <div className="">
        <ul className='flex items-center'>
          <li className='text-BlackColor text-[16px] pr-[50px] font-pops'>About us</li>
          <li className='text-BlackColor text-[16px] pr-[50px] font-pops'>Services</li>
          <li className='text-BlackColor text-[16px] pr-[50px] font-pops'>Use Cases</li>
          <li className='text-BlackColor text-[16px] pr-[50px] font-pops'>Pricing</li>
          <li className='text-BlackColor text-[16px] pr-[50px] font-pops'>Blog</li>
          <button className='px-[35px] py-[15px] text-[#222] hover:bg-[#222] hover:text-[#fff] border-2 border-[#222] duration-500'>Request a quote</button>
        </ul>
      </div>
      </Flex> 
   </Container>
  )
}

export default Navbar