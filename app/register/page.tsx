'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import {
    FormControl,
    Input,
    InputLabel,
    Button,
    Typography,
} from '@mui/material'
import blob from '../../images/blob-scene-haikei.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { signIn } from 'next-auth/react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
    const emailRef = useRef<any>()
    const errRef = useRef<any>()

    const [email, setEmail] = useState<string>('')
    const [validEmail, setValidEmail] = useState<boolean>(false)
    const [emailFocus, setEmailFocus] = useState<boolean>(false)

    const [pass, setPass] = useState<string>('')
    const [validPass, setValidPass] = useState<boolean>(false)
    const [passFocus, setPassFocus] = useState<boolean>(false)

    const [matchPass, setMatchPass] = useState<string>('')
    const [validMatch, setValidMatch] = useState<boolean>(false)
    const [matchFocus, setMatchFocus] = useState<boolean>(false)

    const [errMsg, setErrMsg] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
        emailRef.current?.focus()
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PASS_REGEX.test(pass)
        console.log(result)
        console.log(pass)
        setValidPass(result)
        const match = pass === matchPass
        setValidMatch(match)
    }, [pass, matchPass])

    useEffect(() => {
        setErrMsg('')
    }, [email, pass, matchPass])

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()

        if (pass !== matchPass) {
            setErrMsg('Passwords do not match')
        }
    }

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
                    <FormControl onSubmit={handleSubmit} >
                        <InputLabel htmlFor='emailAddress'>
                            Email Address
                        </InputLabel>
                        <Input
                            id='emailAddress'
                            type='email'
                            className='w-full mb-3'
                            required
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-invalid={validEmail ? 'false' : 'true'}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <span
                            className={
                                emailFocus && email && !validEmail
                                    ? 'block text-red-600 text-sm'
                                    : 'hidden'
                            }
                        >
                            Email address is invalid
                        </span>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='company'>
                            Company's Name
                        </InputLabel>
                        <Input
                            id='company'
                            type='text'
                            className='w-full mb-3'
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input
                            id='password'
                            type='password'
                            className='w-full mb-3'
                            required
                            onChange={(e) => setPass(e.target.value)}
                            aria-invalid={validPass ? 'false' : 'true'}
                            onFocus={() => setPassFocus(true)}
                            onBlur={() => setPassFocus(false)}
                        />
                        <span
                            className={
                                passFocus && !validPass
                                    ? 'block text-sm'
                                    : 'hidden'
                            }
                        >
                            8 to 24 characters. must include uppercase and
                            lowercase letters, a number and a special character
                        </span>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='password'>
                            Confirm Password
                        </InputLabel>
                        <Input
                            id='password'
                            type='password'
                            className='w-full'
                            onChange={(e) => setMatchPass(e.target.value)}
                            autoComplete='false'
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <span
                            className={
                                matchFocus && !validMatch
                                    ? 'block text-sm text-red-600'
                                    : 'hidden'
                            }
                        >
                            Must match the first password input field
                        </span>
                        <span ref={errRef} className={errMsg ? '' : ''}>
                            {errMsg}
                        </span>
                    </FormControl>

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
                            onClick={() => signIn()}
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
