"use client";

import Heading from "../Heading";

import { BsCheck2Circle } from "react-icons/bs";

const Third = () => {
  return (
    <section className='h-[100vh]'>
      <div className='max-w-[1440px] m-auto pt-24'>
        <Heading
          titleStyle='text-5xl'
          title='Why FinDustry?'
          subtitleStyle='text-2xl'
          subtitle="If you're looking for services..."
        />

        <div className='text-white grid grid-cols-2 grid-rows-2 gap-12 p-12'>
          <div className='row-span-2 bg-[#8d2bd7] h-[20vh] rounded-lg p-12 flex gap-4'>
            <BsCheck2Circle size={40}></BsCheck2Circle>
            <Heading
              title='Production companies database in one place'
              subtitleStyle='text-white'
              subtitle='You create only one offer which will be responded by each company directly by platform.'
            />
          </div>
          <div className='row-span-2 bg-[#8d2bd7] rounded-lg p-12 flex gap-4'>
            <BsCheck2Circle size={40}></BsCheck2Circle>
            <Heading
              title='Production companies database in one place'
              subtitleStyle='text-white'
              subtitle='You create only one offer which will be responded by each company directly by platform.'
            />
          </div>
          <div className='row-span-2 row-start-3 bg-[#8d2bd7] h-[20vh] rounded-lg p-12 flex gap-4'>
            <BsCheck2Circle size={40}></BsCheck2Circle>
            <Heading
              title='Production companies database in one place'
              subtitleStyle='text-white'
              subtitle='You create only one offer which will be responded by each company directly by platform.'
            />
          </div>
          <div className='row-span-2 row-start-3 bg-[#8d2bd7] rounded-lg p-12 flex gap-4'>
            <BsCheck2Circle size={40}></BsCheck2Circle>
            <Heading
              title='Production companies database in one place'
              subtitleStyle='text-white'
              subtitle='You create only one offer which will be responded by each company directly by platform.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
