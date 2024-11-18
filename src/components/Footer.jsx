import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <Container className="py-10 bg-[#222] rounded-t-[45px]">
        <Flex className="justify-between items-center px-[60px] py-[30px]">
            <div className="text-[#fff] bg-[#fff]">
                <img src={Logo} alt="" />
            </div>
            <div className=""></div>
            <div className=""></div>
            <ul className='flex items-center'>
                <li className='text-[20px] text-[#fff] font-pops font-normal pr-3'>About us</li>
                <li className='text-[20px] text-[#fff] font-pops font-normal pr-3'>Servicess</li>
                <li className='text-[20px] text-[#fff] font-pops font-normal pr-3'>Use Cases</li>
                <li className='text-[20px] text-[#fff] font-pops font-normal pr-3'>Pricing</li>
                <li className='text-[20px] text-[#fff] font-pops font-normal pr-3'>Blog</li>
            </ul>
            <div className="flex items-center">
                <BsFacebook className='mr-3 text-[40px] text-[#318bb4]'/>
                <FaTwitter className='mr-3 text-[40px] text-[#318bb4]'/>
                <FaLinkedinIn className='mr-3 text-[40px] text-[#318bb4]'/>
            </div>
        </Flex>
        <div className="flex items-center pt-[55px] px-[60px] pb-[50px] border-b-2 border-[#fff] ">
                <div className="w-[50%]">
                    <button className='text-[20px] text-[#fff] font-pops font-normal px-[5px] py-[5px] bg-GreenColor rounded-[15px]'>Contact us:</button>
                    <p className='text-[20px] text-[#fff] font-pops font-normal mt-[20px]'>Email: info@positivus.com</p>
                    <p className='text-[16px] text-[#fff] font-pops font-normal'>Phone: 555-567-8901Phone: 555-567-8901</p>
                    <div className="pt-[20px]">
                    <p className='text-[16px] text-[#fff] font-pops font-normal'>Address: 1234 Main St</p>
                    <span className='text-[16px] text-[#fff] font-pops font-normal'>Moonstone City, Stardust State 12345</span>
                    </div>
                </div>
                <div className="w-[50%] flex items-center px-[30px] py-[58px] bg-[#292A32] rounded-[20px]">
                    <input type="email" className='px-[80px] py-[15px] pl-[5px] border-2 border-[#222] rounded-[10px]' placeholder='email' />
                    <div className="">
                        <button className='text-[20px] text-[#fff] font-pops font-normal px-[35px] py-[15px] bg-GreenColor rounded-[15px] ml-[10px]'>Subscribe to news</button>
                    </div>
                </div>
            </div>
            <div className="pl-[56px] pt-[40px] flex items-center">
                <p className='text-[16px] text-[#fff] font-pops font-normal'>© 2023 Positivus. All Rights Reserved.</p>
                <p className='text-[16px] text-[#fff] font-pops font-normal ml-[20px]'>Privacy Policy</p>
            </div>
    </Container>
    </>
  )
}

export default Footer