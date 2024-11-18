import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaDownload } from "react-icons/fa6";
import Photo1 from "../assets/photo1.png"
import Save1 from "../assets/save1.png"
import Save2 from "../assets/save2.png"
import Save3 from "../assets/save3.png"
import Save4 from "../assets/save4.png"

const Service = () => {
  return (
   <Container>
    <Flex className="py-5 flex-wrap gap-y-[40px] justify-between items-center">
       <div className="w-[49%]">
      <div className="flex items-center border-2 border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-GreenColor inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-GreenColor text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload/>
                <p className='pl-3 font-pops text-[16px] '>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Photo1} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
       <div className="w-[49%]">
       <div className="flex items-center border-2 border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-GreenColor inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-GreenColor text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload/>
                <p className='pl-3 font-pops text-[16px] '>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Photo1} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
       <div className="w-[49%]">
       <div className="flex items-center border-2 bg-[#222] border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-[#fff] inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-[#fff] text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload className='text-[#fff]'/>
                <p className='pl-3 font-pops text-[16px] text-[#fff]'>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Save1} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
       <div className="w-[49%]">
       <div className="flex items-center border-2 border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-GreenColor inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-GreenColor text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload/>
                <p className='pl-3 font-pops text-[16px] '>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Save2} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
       <div className="w-[49%]">
       <div className="flex items-center bg-GreenColor border-2 border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-GreenColor inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-GreenColor text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload/>
                <p className='pl-3 font-pops text-[16px] '>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Save3} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
       <div className="w-[49%]">
       <div className="flex items-center bg-[#222] border-2 border-[#222] w-[608px] p-[50px] rounded-[45px] border-b-8 border-b-[#222]">
      <div className="w-24%">
            <h4 className='bg-GreenColor inline text-[30px] font-pops'>Search engine</h4>
            <h4 className='bg-GreenColor text-[30px] font-pops'>optimization</h4>
            <div className="flex items-center pt-[99px]">
                <FaDownload className='text-[#fff]'/>
                <p className='pl-3 font-pops text-[16px] text-[#fff]'>Learn more</p>
            </div>
        </div>
        <div className="w-24%">
            <picture>
                <img src={Save4} className='pl-[69px] w-full h-full' alt="" />
            </picture>
        </div>
      </div>
       </div>
    </Flex>
   </Container>
  )
}

export default Service