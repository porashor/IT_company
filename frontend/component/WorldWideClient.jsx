import React from 'react'
import image from "../img/Map.webp"
import ClientSlider from './ClientSlider'
const WorldWideClient = () => {
  return (
    <div>
        <div className='my-5 md:my-10  py-5'>
        {/* container  */}
            <div className='w-[90%] md:w-[80%] mx-auto'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-center py-5 font-bold'>Our valuable clients</h1>
                <img src={image} alt="" className='w-full g-fit' />
                <ClientSlider/>
            </div>
        </div>
    </div>
  )
}

export default WorldWideClient
