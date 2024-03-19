import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section id='home'>
      <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#090c1d] font-bold p-2'>
        RIZKY AKBAR SETIAWAN
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#090c1d]'>
        Welcome to My Website
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4 text-[#090c1d]'>
            My expertise includes  
          </p>
          <Typed
          className='md:text-1xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#a04703]'
            strings={['Problem Solving', 'Mechanical', 'Teamwork']}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        <p className='md:text-xl text-base text-gray-500'>Selamat datang di portofolio saya! Saya adalah <span className='font-bold'>Rizky Akbar Setiawan</span>, seorang mahasiswa Teknik di <span className='font-bold'>Universitas Airlangga</span>. Saya memiliki latar belakang yang kuat dalam bidang mekanik dan telah mendapatkan pengalaman praktis sebagai Staff Mekanikal!</p>
        <a href='https://www.linkedin.com/in/rizky-akbar-setiawan-a99389193/'>
          <button className='bg-[#fa6e06] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-white'>Connect with Me!</button>
        </a>
      </div>
    </div>
    </section>
    
  );
};

export default Hero;