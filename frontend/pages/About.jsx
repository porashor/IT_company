import React from 'react'
import AgencySection from '../component/AgencySec'
import CountDetails from '../component/CountDetails'

const About = () => {
  return (
    <div>
      {/* banner  */}
      <div className='w-full h-[300px] flex flex-col items-center justify-center bg-[#1D3E6D]'>
        <h1 className='text-2xl md:text-3xl font-bold text-white'> About Us</h1>
        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* service section  */}
      <div className='w-[95%] md:w-[90%] mx-auto my-10'>
        <AgencySection />
      </div>
      <CountDetails/>
    </div>
  )
}

export default About
