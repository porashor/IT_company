import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const OurService = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_LINK)
        const data = await response.json()
        setServices(data.data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchServices()
  }, []);
  console.log(services)
  return (
    <div className='py-5 md:py-10'>
      <h2 className='text-center text-2xl md:text-3xl font-bold'>Our Services</h2>
      <p className='text-center text-slate-600'>Details about the services we offer will go here.</p>
      {/* container  */}
      <div className='w-[90%] md:w-[80%] flex md:flex-wrap flex-col md:flex-row items-center justify-between gap-5 mx-auto my-5'>
        {/* single service  */}
        {services?.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default OurService
