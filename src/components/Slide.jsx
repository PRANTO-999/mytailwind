import React from 'react'
import Container from './Container'
import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"
import Slider from "react-slick";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute rounded-[50%] translate-y-[-50%] bg-[tomato] h-[70px] w-[70px] text-center leading-[70px] right-[-30px] top-[50%]' onClick={onClick}><SlArrowRight className='inline-block text-[20px] text-[#fff]'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute rounded-[50%] translate-y-[-50%] bg-[tomato] h-[70px] w-[70px] text-center leading-[70px] left-[-30px] z-10 top-[50%]' onClick={onClick}><SlArrowLeft className='inline-block text-[20px] text-[#fff]'/></div>
    );
  }


const Slide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <Container className="py-5">
   <Slider {...settings}>
         <picture>
          <img src={One} className='h-[600px] w-[100%] rounded-[15px]' alt="" />
          </picture> 
        <picture>
          <img src={Two}  className='h-[600px] w-[100%] rounded-[15px]' alt="" />
          </picture>    
        <picture>
          <img src={Three} className='h-[600px] w-[100%] rounded-[15px]' alt="" />
          </picture>
    
          </Slider>
    </Container>
  )
}

export default Slide