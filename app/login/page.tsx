'use client' 

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blob from '../../images/blob-scene-haikei.svg'
import {
    Typography,
    TextField,
    InputLabel,
    Button,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { getServerSession} from 'next-auth'
import { signIn } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'
import axios from 'axios'
import { NextPageContext } from 'next'
import { useRouter } from 'next/navigation'

export async function getServerSideProps(context: NextPageContext) {
    const session = await getServerSession(context)

    if (session) {
        return {
            redirect: {
                destionation: '/',
                premanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            })

            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }, [email, password, router])
    
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
                    <form>
                        
                        <TextField
                            id='emailAddress'
                            type='email'
                            className='w-full mb-3'
                            label='Email Address'
                            variant='outlined'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </form>
                    <form>
                        
                        <TextField
                            id='password'
                            type='password'
                            className='w-full'
                            label='Password'
                            variant='outlined'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='hidden text-red-500'>
                            Invalid password
                        </span>
                    </form>
                    
                    <Button variant='text' className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300' color='secondary'>
                        <span className='m-2 text-xl'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </span>{' '}
                        Sign in with Google
                    </Button>
                    <div className='w-full flex flex-col justify-between items-center mt-5'>
                        <Button onClick={login} variant='contained' className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'>Sign In</Button>
                        <span className='text-sm'>Don't have an account? <Button variant='text' className='text-xs'><Link href='/register'>Sign Up!</Link></Button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
