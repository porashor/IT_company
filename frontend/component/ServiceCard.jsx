import React from 'react'
import image from "../img/ai.png"
const ServiceCard = () => {
  return (
    <div className='w-[300px] aspect-square bg-blue-200 flex flex-col items-center justify-center rounded-xl'>
      <img src={image} alt="service" width={150} height={150}  className='w-[100px] aspect-square rounded-full overflow-noen object-cover'/>
      <h1 className='text-xl font-bold'>Web development</h1>
      <button className='py-1 px-2 rounded-xl font-bold my-2 hover:bg-slate-200 transition-all duration-200 bg-white'>Read more</button>
    </div>
  )
}

export default ServiceCard
