import React from 'react'
import { BiUser } from "react-icons/bi";
import logo from '../assets/Image/logo.jpg'

const Navbar = () => {
  return (
    <>
      <nav className='sticky top-0 bg-white z-50'>
        <div className="w-[90%] h-full m-auto flex justify-between items-center z-50">
          <div className='flex justify-center items-center h-full gap-2'> <img src={logo} className='h-full' />
            <h1 className='font-bold text-2xl text-[#8c7fe6]'>ZigCabio</h1></div>
          <BiUser className='text-2xl border-2 border-[#8c7fe6] text-[#8c7fe6] rounded-[100%] p-2 box-content' />
        </div>
      </nav>
    </>
  )
}

export default Navbar
