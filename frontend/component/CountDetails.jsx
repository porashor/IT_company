import React from 'react'
import CountUp from "react-countup";

const CountDetails = () => {
  return (
    <div className='w-[80%] mx-auto py-5 md:py-12 text-slate-800 flex items-center justify-between'>
      <p data-aos="zoom-in" className='flex flex-col gap-2 items-center justify-center md:gap-5 text-2xl font-bold text-center'>
        <span className='text-3xl md:text-5xl font-bold text-blue-600'>
          <CountUp start={0} end={5000} duration={3} />+</span> <br />
        Projects Completed
      </p>
      <p data-aos="zoom-in" className='flex flex-col gap-2 items-center justify-center md:gap-5 text-2xl font-bold text-center'>
        <span className='text-3xl md:text-5xl font-bold text-blue-600'>
          <CountUp start={0} end={500} duration={3} />+</span> <br />
        Degital exparts
      </p>
      <p data-aos="zoom-in" className='flex flex-col gap-2 items-center justify-center md:gap-5 text-2xl font-bold text-center'>
        <span className='text-3xl md:text-5xl font-bold text-blue-600'>
          <CountUp start={0} end={99} duration={3} />%</span> <br />
        Client satisfaction
      </p>
    </div>
  )
}

export default CountDetails
