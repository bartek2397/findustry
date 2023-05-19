"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../images/compass-rose-297758_1280.png";

import Heading from "../Heading";

const Footer = () => {
  return (
    <footer className='h-[50vh] pt-24'>
      <div className='max-w-[1440px] h-[60%] m-auto flex justify-between'>
        <div className='flex flex-col'>
          <div>
            <Image src={logo} alt='Logo' width={100} />
          </div>
          <div className='pt-8 text-lg'>
            <span>email Address@address.pl</span>
          </div>
        </div>
        <div className="w-[30%] h-[100%] pt-10">
            <Heading title="Menu" />
            <div className="flex justify-between text-lg pt-8 h-[50%]">
                <div className="flex flex-col justify-between">
                    <Link href='/'>FinDustry Platform</Link>
                    <Link href='/'>Privacy Policy</Link>
                </div>
                <div className="flex flex-col justify-between ">
                    <Link href='/'>Price list</Link>
                    <Link href='/'>Contact</Link>
                </div>
            </div>
        </div>
        <div className="pt-8">
          <Heading title="Technical Support" />
          <div className="flex flex-col justify-between h-[50%] text-lg pt-10">
            <Link href='/'>Contact</Link>
            <Link href='/'>Phone Number</Link>
          </div>
        </div>
      </div>
        <span className="block h-[1px] max-w-[1440px] m-auto bg-[#a1a1a1]"></span>
      
    </footer>
  );
};

export default Footer;
