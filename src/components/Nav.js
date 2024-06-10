import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [nav, setNav] = useState(false);

  return (
    <div>
      {nav ? <div className='relative z-40'>
        <div className='flex md:hidden absolute right-0 top-[95px] duration-500 border-1 border bg-white border-black min-h-[200px] rounded-l-lg w-[148px] items-center justify-center'>
            <div className='flex flex-col items-center justify-center  p-4 gap-4'>
            <Link to="/">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]' onClick={() => {setNav(!nav)}}>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]' onClick={() => {setNav(!nav)}}>About</h1></Link>
            <Link to="/services">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]' onClick={() => {setNav(!nav)}}>Services</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]' onClick={() => {setNav(!nav)}}>Contact</h1></Link>
            </div>
        </div>
        
      </div> : <div className='relative'>
        <div className='flex md:hidden fixed right-[-500px] top-[95px] duration-500 border-5 bg-white border border-black min-h-[200px] rounded-lg w-[150px] items-center justify-center'>
            <div className='flex flex-col items-center justify-center p-4 gap-4'>
            <Link to="/">
            <h1 className='font-semibold'>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold'>About</h1></Link>
            <Link to="/services">
            <h1 className='font-semibold'>Services</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold'>Contact</h1></Link>
            </div>
        </div>
      </div> }
      <div className='flex items-center justify-between p-3'>
        <div className='flex items-center justify-center' >
          <Link to="/">
            <img src='https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Nexus_Info_Logo_Black_2png-qiywmjivnl9ke73u7zh62n7q48qmzl9fx6p47ghuzw.png' alt="logo" className='md:pl-5'/>
          </Link>
        </div>
        <div className='hidden md:flex items-center justify-center text-xl gap-5 mb-4 pr-5 pt-5'>
          <Link to="/">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]'>Home</h1></Link>
          <Link to="/about">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]'>About</h1></Link>
            <Link to="/services">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]'>Services</h1></Link>
          <Link to="/contact">
            <h1 className='font-semibold transition ease-in-out transform duration-200 hover:border-b-2 hover:text-[#2E9633]'>Contact</h1></Link>
        </div>
        <div className='flex md:hidden'>
          <button className=' border-0 p-4 rounded-full' onClick={() => {setNav(!nav)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Nav;

