"use client";

import Card from "./homePageComponents/Card";
import Heading from "../Heading";


const Fourth = () => {
  return (
    <section className='h-[80vh] bg-[#8d2bd7]'>
      <div className='max-w-[1440px] m-auto pt-24'>
        <Heading
          titleStyle='text-5xl text-white'
          title='Why FinDustry?'
          subtitleStyle='text-2xl text-white'
          subtitle="If you're looking for services..."
        />

        <div className='text-black grid grid-cols-2 grid-rows-2 gap-12 p-12'>
          <Card
            title='Production companies database in one place'
            subtitle='You create only one offer which will be responded by each company directly by platform.'
          />
          <Card
            title='Production companies database in one place'
            subtitle='You create only one offer which will be responded by each company directly by platform.'
          />
          <Card
            title='Production companies database in one place'
            subtitle='You create only one offer which will be responded by each company directly by platform.'
          />
          <Card
            title='Production companies database in one place'
            subtitle='You create only one offer which will be responded by each company directly by platform.'
          />
        </div>
      </div>
    </section>
  );
};

export default Fourth;
