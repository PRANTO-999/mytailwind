import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"
import Img4 from "../assets/img4.png"
import Img5 from "../assets/img5.png"
import Img6 from "../assets/img6.png"

const Project = () => {
  return (
  <Container>
    <Flex className="justify-between items-center">
      <picture>
        <img src={Img1} alt="" />
      </picture>
      <picture>
        <img src={Img2} alt="" />
      </picture>
      <picture>
        <img src={Img3} alt="" />
      </picture>
      <picture>
        <img src={Img4} alt="" />
      </picture>
      <picture>
        <img src={Img5} alt="" />
      </picture>
      <picture>
        <img src={Img6} alt="" />
      </picture>
    </Flex>
  </Container>
  )
}

export default Project