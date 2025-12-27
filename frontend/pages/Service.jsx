import React from 'react'
import AgencySection from '../component/AgencySec'
import CountDetails from '../component/CountDetails'
import OurService from '../component/OurService'

const Service = () => {
  return (
    <div>
      {/* banner  */}
      <div className='w-full h-[300px] flex flex-col items-center justify-center bg-[#1D3E6D]'>
        <h1 className='text-2xl md:text-3xl font-bold text-white'> Our Services!</h1>
        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <OurService/>
    </div>
  )
}

export default Service
