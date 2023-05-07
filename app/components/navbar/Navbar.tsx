"use client";

import Button from "../Button";
import logo from "../../../images/compass-rose-297758_1280.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='w-full bg-[#8d2bd7] fixed z-10'>
      <div className='max-w-[1440px] flex justify-between items-center mx-auto'>
        <div className='flex items-center justify-between '>
          <Image src={logo} alt='Logo' width={100} height={90} />
          <ul className='text-white flex justify-between'>
            <Link className='mx-6' href='/'>
              Home
            </Link>
            //{" "}
            <Link className='mx-6' href='/about'>
              About us
            </Link>
            //{" "}
            <Link className='mx-6' href='/pricing'>
              Pricing
            </Link>
            //{" "}
            <Link className='mx-6' href='/contact'>
              Contact
            </Link>
          </ul>
        </div>
        <ul className='flex justify-around w-[20%]'>
          <Button className='btn-primary' label='Sign In'>
            <Link href='/login'></Link>
          </Button>
          <Button className='btn-secondary' label='Sign Up'>
            <Link href='/register'></Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
