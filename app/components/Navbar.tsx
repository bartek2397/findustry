'use client'

import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import logo from '../../images/compass-rose-297758_1280.png'
import Image from 'next/image'

import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-[#8d2bd7]'>
                <div className='max-w-[1440px] flex justify-between items-center mx-auto'>
                    <div className='flex items-center justify-between '>
                        <Image src={logo} alt='Logo' width={100} height={90} />
                        <ul className='text-white flex justify-between'>
                            <Link className='mx-2' href='/'>Home</Link>
                            <Link className='mx-2' href='/about'>About us</Link>
                            <Link className='mx-2' href='/pricing'>Pricing</Link>
                            <Link className='mx-2' href='/contact'>Contact</Link>
                        </ul>
                    </div>
                    <ul className='flex justify-around w-[20%]'>
                        <Button variant='contained' color='primary' className='rounded-md'>
                            <Link href='/login'>Sign In</Link>
                        </Button>
                        <Button variant='contained' className=''>
                            <Link href='/register'>Register</Link>
                        </Button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
