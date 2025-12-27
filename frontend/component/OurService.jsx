import React from 'react'
import ServiceCard from './ServiceCard'

const OurService = () => {
  return (
    <div className='py-5 md:py-10'>
      <h2 className='text-center text-2xl md:text-3xl font-bold'>Our Services</h2>
      <p className='text-center text-slate-600'>Details about the services we offer will go here.</p>
      {/* container  */}
      <div className='w-[90%] md:w-[80%] flex md:flex-wrap flex-col md:flex-row items-center justify-between gap-5 mx-auto my-5'>
        {/* single service  */}
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </div>
  )
}

export default OurService
