'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import {
    InputLabel,
    Button,
    Typography,
    TextField,
} from '@mui/material'
import blob from '../../images/blob-scene-haikei.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'


// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [company, setCompany] = useState<string>('')

   const register = useCallback(async () => {
    try {
        await axios.post('/api/register', {
            email,
            company,
            password
        })
    } catch (error) {
        console.log(error)
    }
   }, [email, company, password])

    return (
        <div>
            <Image
                src={blob}
                alt='BackgroundImage'
                style={{ objectFit: 'cover' }}
                fill
                className='relative'
            />
            <div className='absolute bg-white w-[400px] max-h-fit z-1 left-[50%] -translate-x-[50%] top-[25%] rounded-lg text-center p-5'>
                <Typography variant='h4'>Sign Up</Typography>
                <div className='p-3 w-full flex flex-col justify-between'>
                    <form >
                        
                        <TextField
                            id='emailAddress'
                            type='email'
                            className='w-full mb-3'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            variant='outlined'
                            label='Email Address'
                        />
                        
                    </form>
                    <form>
                        
                        <TextField
                            id='company'
                            type='text'
                            className='w-full mb-3'
                            onChange={(e) => setCompany(e.target.value)}
                            variant='outlined'
                            label='Company name'
                        />
                    </form>
                    <form>
                        <TextField
                            id='password'
                            type='password'
                            className='w-full mb-3'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            variant='outlined'
                            label='Password'
                        />
                        
                    </form>
                    <form>
                        
                        
                    </form>

                    <Button
                        variant='text'
                        className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300'
                        color='secondary'
                    >
                        <span className='m-2 text-xl'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </span>{' '}
                        Sign up with Google
                    </Button>
                    <div className='w-full flex flex-col justify-between items-center mt-5'>
                        <Button
                            variant='contained'
                            className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'
                            onClick={register}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
