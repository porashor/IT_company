import React from 'react'
import Slider from "react-slick";
import img1 from "../img/log1.png"
import img2 from "../img/log2.png"
import img3 from "../img/log3.png"
import img4 from "../img/log4.png"
import img5 from "../img/log5.png"
import img6 from "../img/log6.png"
import img7 from "../img/log7.png"
import img8 from "../img/log8.png"
const ClientSlider = () => {
    const slidersData = [
        {id:1, img:img1},
        {id:2, img:img2},
        {id:3, img:img3},
        {id:4, img:img4},
        {id:5, img:img5},
        {id:6, img:img6},
        {id:7, img:img7},
        {id:8, img:img8},
    ]
  return (
    <div>
        <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000} >
            {
                slidersData.map((s)=>(
                    <div className='flex justify-center items-center p-5' key={s.id}>
                        <img src={s.img} alt="Client 1" className='w-40 h-30 object-cover' />
                    </div>
                ))
            }
        </Slider>
      >
    </div>
  )
}

export default ClientSlider
