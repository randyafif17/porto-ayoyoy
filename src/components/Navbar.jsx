import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-2xl font-bold text-[#a04703]'>Rizky Akbar S.</h1>
      <div className='hidden md:flex'>
        {/* <a className='p-4 font-bold text-[#a04703]' href='#home'>Home</a>
        <a className='p-4 font-bold text-[#a04703]' href='#mission'>Mission</a>
        <a className='p-4 font-bold text-[#a04703]' href='#research'>Research</a>
        <a className='p-4 font-bold text-[#a04703]' href='#support'>Support</a>
        <a className='p-4 font-bold text-[#a04703]' href='#contact'>Contact</a> */}
        <a className='p-4 font-bold text-[#a04703]' href='#home'>Home</a>
        <a className='p-4 font-bold text-[#a04703]' href='#about'>Experience</a>
        <a className='p-4 font-bold text-[#a04703]' href='#experience'>About</a>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFBE7] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#a04703] m-4'>Whendy.</h1>
          <a className='p-4 border-b text-[#a04703]' href='#home'>Home</a>
          <a className='p-4 border-b text-[#a04703]' href='#experience'>Experience</a>
          <a className='p-4 border-b text-[#a04703]' href='#whendy'>About</a>
      </ul>
    </div>
  );
};

export default Navbar;