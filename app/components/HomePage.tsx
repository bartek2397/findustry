"use client";

import Navbar from "./navbar/Navbar";
import Image from "next/image";
import firstSectionBg from "../../images/christopher-burns-Wiu3w-99tNg-unsplash.jpg";
import secondSectionBg from '../../images/crystal-kwok-XUEdfpPIhXg-unsplash.jpg'
import Heading from "./Heading";
import Input from "./inputs/Input";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section className='flex flex-col max-w-[1440px] m-auto h-[100vh]'>
        <Image
          src={firstSectionBg}
          alt='Background Image'
          style={{ objectFit: "cover", opacity: "18%" }}
          fill
          className='relative -z-10'
        />

        <div className="mt-64 ">
            <Heading center titleStyle="text-5xl" subtitleStyle="text-2xl" title="We connect companies from different industry sectors" subtitle="Go to the next level and join industry network 4.0"/>
        </div>
        <div className="mt-32 w-[75%] m-auto">
            <Input id="searchBar" label="Search for your needs..."/>
        </div>
          
        
        
      </section>
      <section className="flex flex-col max-w-[1440px]">
        {/* <Image
            src={secondSectionBg}
            alt="SecondBg"
            style={{ objectFit: 'cover' }}
            fill
            className="relative"
        /> */}
      </section>
    </div>
  );
};

export default HomePage;
