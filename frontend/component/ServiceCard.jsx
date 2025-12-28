import React from 'react'
const ServiceCard = ({service}) => {
  return (
    <div data-aos="zoom-in" data-aos-delay={service.id * 100} className='w-[300px] aspect-square bg-blue-200 flex flex-col items-center justify-center rounded-xl'>
      <div className='rounded-full overflow-none object-cover scale-[400%] my-5 '>{service.icon}</div>
      <h1 className='text-xl font-bold'>{service.name}</h1>
      <p className='text-slate-600 text-center w-[90%] py-2'>{service.description}</p>
      <button className='py-1 px-2 rounded-xl font-bold my-2 hover:bg-slate-200 transition-all duration-200 bg-white'>Read more</button>
    </div>
  )
}

export default ServiceCard
