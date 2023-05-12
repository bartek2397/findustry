"use client";

import Image from "next/image";
import secondSectionBg from "../../../images/crystal-kwok-XUEdfpPIhXg-unsplash.jpg";

import Heading from "../Heading";
import { SlMagnifier } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

const Second = () => {
  return (
    <section className='flex flex-col h-[80vh] relative'>
      <Image
        src={secondSectionBg}
        alt='SecondBg'
        fill
        style={{ objectFit: "cover", opacity: "0.7", zIndex: "-10" }}
      />
      <span className='block w-full h-[100%] opacity-[0.7] absolute -z-10 bg-[#8d2bd7]'></span>
      <div className='max-w-[1440px] my-28 m-auto flex justify-between items-center z-1'>
        <div className='w-[45%]'>
          <Heading
            titleStyle='text-4xl text-zinc-100'
            subtitleStyle='text-2xl text-white'
            title='FinDustry is a industry search enginge'
            subtitle='that helps you look for specific branch that suits your needs.'
          />
        </div>
        <ul className='w-[50%] flex flex-col justify-between'>
          <li className=' relative flex '>
            <div className='w-[70px] h-[70px] absolute left-0 top-5 bg-gray-500 rounded-full'>
              <span className='absolute top-5 left-5'>
                <SlMagnifier size={30} color='#fff' />
              </span>
            </div>
            <div className='mx-28'>
              <Heading
                titleStyle='text-4xl text-zinc-200'
                subtitleStyle='text-2xl text-white'
                title="Find branch you're looking for or create your own profile!"
                subtitle='You need materials or a subcontractor? Sign up right away and find the best supliers!'
              />
            </div>
          </li>
          <li className=' relative flex '>
            <div className='w-[70px] h-[70px] absolute left-0 top-7 bg-gray-500 rounded-full'>
              <span className='absolute top-5 left-5'>
                <BsTelephone size={30} color='#fff' />
              </span>
              <span className='w-[150px] border-t-[3px] border-dashed rotate-90 absolute -top-[130%] -right-10'></span>
            </div>
            <div className='mx-28 mt-10'>
              <Heading
                titleStyle='text-4xl text-zinc-200'
                subtitleStyle='text-2xl text-white'
                title='Contact your contractor'
                subtitle='
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu condimentum orci. Sed et feugiat nisl. '
              />
            </div>
          </li>
          <li className='relative flex '>
            <div className='w-[70px] h-[70px] absolute left-0 top-10 bg-gray-500 rounded-full'>
              <span className='absolute top-5 left-5'>
                <AiOutlineComment size={30} color='#fff' />
              </span>
              <span className='w-[100px] border-t-[3px] border-dashed rotate-90 absolute -top-[100%] -right-4'></span>
            </div>
            <div className='mx-28 my-10'>
              <Heading
                titleStyle='text-4xl text-zinc-200'
                subtitleStyle='text-2xl text-white'
                title='Leave an opinion about the product you received'
                subtitle='It will help us adjust the finding for you next time!'
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Second;
