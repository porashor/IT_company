import React from 'react'

const ClientArea = () => {
  return (
    <div>
        <div className='my-5 md:my-10 bg-slate-100 py-5'>
        {/* container  */}
        <div className='w-[90%] md:w-[80%] mx-auto md:flex gap-5 items-center justify-between'>
            {/* left  */}
            <div className='md:w-[45%]'>
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZW50JTIwYXJlYXxlbnwwfHwwfHx8MA%3D
                %3D&auto=format&fit=crop&w=500&q=60" alt="client area" className='w-full rounded-xl object-cover'/>
            </div>
            {/* right  */}
            <div className='md:w-[50%]'>
            <h2 className='text-2xl md:text-3xl font-bold'>Client Area</h2>
                <p className='text-slate-700 my-2'>Our Client Area is designed to provide you with easy access to your account information, project updates, and support resources. Log in to manage your services, track progress, and communicate with our team.</p>
                <ul className='list-disc list-inside text-slate-700 my-2'>
                    <li>Account Management: View and update your account details.</li>
                    <li>Project Tracking: Monitor the status of your ongoing projects.</li>
                    <li>Support Resources: Access FAQs, guides, and contact support.</li>
                    <li>Secure Login: Your information is protected with top-notch security measures.</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ClientArea
