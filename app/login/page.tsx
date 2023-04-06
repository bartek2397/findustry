'use client' 

import Image from 'next/image'
import Link from 'next/link'
import blob from '../../images/blob-scene-haikei.svg'
import {
    Typography,
    Input,
    InputLabel,
    FormControl,
    Button,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'


export default async function Login () {

    const session = await getServerSession(authOptions)
    
    return (
        <div>
            <Image
                src={blob}
                alt='BackgroundImage'
                style={{ objectFit: 'cover' }}
                fill
                className='relative'
            />
            <div className='absolute bg-white w-[400px] max-h-fit z-1 left-[50%] -translate-x-[50%] top-[30%] rounded-lg text-center p-5'>
                <Typography variant='h4'>Sign In</Typography>
                <div className='p-3 w-full flex flex-col justify-between'>
                    <FormControl>
                        <InputLabel htmlFor='emailAddress'>
                            Email Address
                        </InputLabel>
                        <Input
                            id='emailAddress'
                            type='email'
                            className='w-full mb-3'
                        />
                        <span className='hidden text-red-500'>
                            Email address is invalid
                        </span>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='password'>
                            Password
                        </InputLabel>
                        <Input
                            id='password'
                            type='email'
                            className='w-full'
                        />
                        <span className='hidden text-red-500'>
                            Invalid password
                        </span>
                    </FormControl>
                    
                    <Button variant='text' className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300' color='secondary'>
                        <span className='m-2 text-xl'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </span>{' '}
                        Sign in with Google
                    </Button>
                    <div className='w-full flex flex-col justify-between items-center mt-5'>
                        <Button variant='contained' className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'>Sign In</Button>
                        <span className='text-sm'>Don't have an account? <Button variant='text' className='text-xs'><Link href='/register'>Sign Up!</Link></Button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

