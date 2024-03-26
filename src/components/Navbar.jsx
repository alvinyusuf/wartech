'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  }

  return (
    <header className="bg-slate-400 text-yellow-300 w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href='/' onClick={handleSmallerScreenNavigation}>
            <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase">javascript</span>
          </Link>
        </div>
        {/* Larger screens navigation */}
        <ul className='hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800'>
          <li className='mr-4 lg:mr-8 hover:text-yellow-300'>
            <Link href='/home'>home</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-yellow-300'>
            <Link href='/about'>about</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-yellow-300'>
            <Link href='/contact'>contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <div className="flex">
            <Link href='/login'>
              <button className='mr-5 bg-yellow-300 text-slate-800 hover:bg-slate-800 hover:text-yellow-300 rounded-full uppercase font-bold px-8 py-2'>login</button>
            </Link>
            <Link href='/signup'>
              <button className='border-2 border-yellow-300 text-white rounded-full uppercase font-bold px-8 py-2'>sign up</button>
            </Link>
          </div>
        </div>
        
        {/* smaller screens - navigation icons */}
        <div onClick={handleSmallerScreenNavigation} className='flex md:hidden'>
          {menuIcon ? (<AiOutlineClose size={25} className='text-yellow-300' />) : (<AiOutlineMenu size={25} className='text-yellow-300' />)}
        </div>

        {/* smaller screens - navbar */}
        <div className={(menuIcon ?
          'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
          :
          'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
        )}>
          {/* smaller screen - navbar links */}
          <div className='w-full'>
            <ul className='uppercase font-bold text-2xl'>
              <li onClick={handleSmallerScreenNavigation} className='py-5 hover:text-yellow-300 cursor-pointer'>
                <Link href='/'>home</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5 hover:text-yellow-300 cursor-pointer'>
                <Link href='/about'>about</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5 hover:text-yellow-300 cursor-pointer'>
                <Link href='/contact'>contact</Link>
              </li>
            </ul>
            <div className='flex flex-col justify-center items-center mt-16'>
              <Link href='/login' onClick={handleSmallerScreenNavigation}><button className='bg-yellow-300 text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5'>login</button></Link>
              <Link href='/signup' onClick={handleSmallerScreenNavigation}><button className='border-2 border-yellow-300 text-white rounded-full uppercase font-bold py-3 w-[250px] mb-5'>sign up</button></Link>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}
