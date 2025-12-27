import React, {useState} from 'react'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import {Link} from 'react-router-dom'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [{
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
    {
        name: 'Services',
        link: '/services'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
    ];
  return (
    <div className='bg-[#1D3E6D] p-4 text-white flex justify-around sticky top-0 z-50'>
      {/* container  */}
      <div className='w-[90%] mx-auto flex justify-between gap-10 relative'>
        {/* logo  */}
        <div className='text-2xl font-bold'>
          <a href="/">MYIT</a>
        </div>
        {/* desktop nav items  */}
        <ul className='gap-8 items-center hidden md:flex'>
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link to={item.link} className='hover:text-gray-300 outline-none focus:text-gray-300'>{item.name}</Link>
                </li>
            ))}
        </ul>
        {/* nav btn  */}
        <div className='md:hidden'>
            {!isOpen ? (
                <CiMenuFries onClick={() => setIsOpen(!isOpen)} className='text-3xl cursor-pointer' />
            ) : (
                <RxCross1 onClick={() => setIsOpen(!isOpen)} className='text-3xl cursor-pointer' />
            )}
        </div>
        {/* mobile nav items */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-2 absolute top-10 right-0 bg-blue-500 p-4`}>
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link onClick={()=>setIsOpen(!isOpen)} to={item.link} className='hover:text-gray-300 outline-none focus:text-gray-300'>{item.name}</Link>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
