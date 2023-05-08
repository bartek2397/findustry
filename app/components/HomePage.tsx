"use client";

import Navbar from "./navbar/Navbar";
import Image from "next/image";
import firstSectionBg from "../../images/christopher-burns-Wiu3w-99tNg-unsplash.jpg";
import secondSectionBg from "../../images/crystal-kwok-XUEdfpPIhXg-unsplash.jpg";
import Heading from "./Heading";
import Input from "./inputs/Input";
import {RxMagnifyingGlass} from 'react-icons/rx'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section className='flex flex-col max-w-[1440px] m-auto h-screen'>
        <Image
          src={firstSectionBg}
          alt='Background Image'
          style={{ objectFit: "cover", opacity: "18%" }}
          fill
          className='relative -z-10'
        />

        <div className='mt-64 '>
          <Heading
            center
            titleStyle='text-5xl'
            subtitleStyle='text-2xl'
            title='We connect companies from different industry sectors'
            subtitle='Go to the next level and join industry network 4.0'
          />
        </div>
        <div className='mt-32 w-[75%] m-auto'>
          <Input id='searchBar' label='Search for your needs...' />
        </div>
      </section>
      <section className='flex flex-col z-10'>
        <Image
          src={secondSectionBg}
          alt='SecondBg'
          style={{
            objectFit: "cover",
            opacity: "18%",
            top: "100%",
            zIndex: -10,
          }}
          fill
        />
        <span className='block w-full h-screen opacity-[0.7] absolute z-10 top-[100%] bg-[#8d2bd7]'></span>
        <div className='max-w-[1440px] my-36 m-auto flex justify-between items-center z-30'>
          <div className='w-[50%]'>
            <Heading
              titleStyle='text-4xl text-zinc-700'
              subtitleStyle='text-2xl text-white'
              title='FinDustry is a industry search enginge'
              subtitle='to look for specific branch that suits your needs.'
            />
          </div>
          <div className='w-[50%] flex flex-col justify-between'>
            <span className="">
              <RxMagnifyingGlass />
            </span>
              <Heading
                titleStyle='text-4xl text-zinc-700'
                subtitleStyle='text-2xl text-white'
                title="Find branch you're looking for or create your own profile!"
                subtitle='You need materials or a subcontractor? Sign up right away and find the best supliers!'
              />
            <Heading
              titleStyle='text-4xl text-zinc-700'
              subtitleStyle='text-2xl text-white'
              title='Contact your contractor'
              subtitle='Lorem Ipsum dolor sit amet'
            />
            <Heading
              titleStyle='text-4xl text-zinc-700'
              subtitleStyle='text-2xl text-white'
              title='Leave an opinion about the product you received'
              subtitle='It will help us adjust the finding for you next time!'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
