"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../images/compass-rose-297758_1280.png";

import Heading from "../Heading";

const Footer = () => {
  return (
    <footer className='h-[50vh] pt-24'>
      <div className='max-w-[1440px] m-auto flex justify-between'>
        <div className='flex flex-col'>
          <div>
            <Image src={logo} alt='Logo' width={100} />
          </div>
          <div className='pt-8 text-xl'>
            <span>Email Address</span>
          </div>
        </div>
        <div>
            <Heading title="Menu" />
            <div className="flex">
                <div className="flex flex-col justify-between">
                    <Link href='/'>FinDustry Platform</Link>
                    <Link href='/'>Privacy Policy</Link>
                </div>
            </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
