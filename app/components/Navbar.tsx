'use client'

import { ButtonUnstyled } from '@mui/base'
import logo from '../../images/compass-rose-297758_1280.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        
        <div className='w-full bg-[#8d2bd7]'>
            <div className='max-w-[1440px] flex justify-between items-center mx-auto'>
                <div className='flex items-center justify-between '>
                    <Image src={logo} alt='Logo' width={100} height={90} />
                    <ul className='text-white flex justify-between'>
                        
                        <Link className='mx-6' href='/'>Home</Link>
                        // {' '}
                        <Link className='mx-6' href='/about'>About us</Link>
                        // {' '}
                        <Link className='mx-6' href='/pricing'>Pricing</Link>
                        // {' '}
                        <Link className='mx-6' href='/contact'>Contact</Link>
                    </ul>
                </div>
                <ul className='flex justify-around w-[20%]'>
                    <ButtonUnstyled className='text-slate-200 hover:underline'>
                        <Link href='/login'>Sign In</Link>
                    </ButtonUnstyled>
                    <ButtonUnstyled className='rounded-lg bg-[#657ff1] py-2 px-8 text-slate-100'>
                        <Link href='/register'>Register</Link>
                    </ButtonUnstyled>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
