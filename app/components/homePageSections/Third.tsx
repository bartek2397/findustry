"use client";

import Heading from "../Heading";

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

        <div className='text-white grid grid-cols-2 grid-rows-2 gap-12'>
          <div className='row-span-2 bg-neutral-700'>1</div>
          <div className='row-span-2 bg-black'>5</div>
          <div className='row-span-2 row-start-3 bg-black'>6</div>
          <div className='row-span-2 row-start-3 bg-black'>7</div>
        </div>
      </div>
    </section>
  );
};

export default Third;
