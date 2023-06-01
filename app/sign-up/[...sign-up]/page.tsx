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
import { useRouter } from 'next/navigation'

import { SignUp } from '@clerk/nextjs'


// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [company, setCompany] = useState<string>('')

   const register = useCallback(async () => {
    try {
        await axios.post('api/register', {
            email,
            company,
            password
        })

        router.push('/')
    } catch (error) {
        console.log(error)
    }
   }, [email, company, password])

    return (
            <SignUp path='/sign-up' routing="path" signInUrl='/sign-in' />
    )
}

export default Register
