import React from 'react'
import HelloForm from '../component/Sayhello'
import ContactInfo from '../component/ContactForm'
import PromoBanner from '../component/PromoBanner'

const Contact = () => {
  return (
    <div>
      <div className='w-full h-[300px] bg-[#1D3E6D] flex items-center justify-center text-white'>
        <h1 className='text-2xl md:text-4xl font-bold'>Contact with us!</h1>
      </div>
      <div className='w-full w-[80%] md:flex gap-5 mx-auto my-10'>
        <HelloForm/>
        <ContactInfo/>
      </div>
      <div className='w-full w-[80%] md:flex gap-5 mx-auto my-10'>
        <PromoBanner/>
      </div>
    </div>
  )
}

export default Contact
