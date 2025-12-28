import React from 'react'

const Speciality = () => {
  return (
    <div data-aos="zoom-in" className='my-5 md:my-10 bg-slate-300 py-5'>
      {/* container  */}
      <div className='w-[90%] md:w-[80%] mx-auto md:flex gap-5 items-center justify-between'>
        {/* left  */}
        <div data-aos-delay="800" data-aos="zoom-in" className='md:w-[50%]'>
          <h2 className='text-2xl md:text-3xl font-bold'>Our Speciality</h2>
            <p className='text-slate-700 my-2'>We pride ourselves on our unique approach to delivering top-notch services that cater to the specific needs of our clients. Our team of experts is dedicated to ensuring excellence in every project we undertake.</p>
            <ul className='list-disc list-inside text-slate-700 my-2'>
                <li>Customized Solutions: Tailored strategies to meet your business goals.</li>
                <li>Expert Team: Skilled professionals with extensive industry experience.</li>
                <li>Innovative Approach: Leveraging the latest technologies and methodologies.</li>
                <li>Customer-Centric: Focused on delivering exceptional customer service.</li>
            </ul>
        </div>
        {/* right  */}
        <div data-aos-delay="800" data-aos="zoom-in" className='md:w-[45%]'>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlY2lhbGl0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="speciality" className='w-full rounded-xl object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Speciality
