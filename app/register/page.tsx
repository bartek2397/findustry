"use client";

import { useState } from "react";

import Link from "next/link";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { BsCheck2Circle } from "react-icons/bs";
import { Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Input from "../components/inputs/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors, },} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            name: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data).then(() => {
            window.alert("Success")
            router.push('/login')
        }).catch((error) => {
            window.alert(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }
  return (
    <div>
      <aside className='w-[20%] bg-[#8d2bd7] h-screen flex flex-col items-start mt-0 p-8'>
        <Heading
          titleStyle='text-white pl-4'
          title='Findustry App will help you to:'
        />
        <ul className='flex flex-col justify-between list-none h-[30%] p-4 m-0 mb-0'>
          <li className='flex items-start gap-4 text-white mb-4'>
            <BsCheck2Circle
              className='flex-shrink-0'
              size={25}
              color='#fff'
            ></BsCheck2Circle>
            <span>Find the contractor to make detail products</span>
          </li>
          <li className='flex items-start gap-4 text-white mb-4'>
            <BsCheck2Circle
              className='flex-shrink-0'
              size={25}
              color='#fff'
            ></BsCheck2Circle>
            <span>Find new customers for services you provide</span>
          </li>
          <li className='flex items-start gap-4 text-white mb-4'>
            <BsCheck2Circle
              className='flex-shrink-0'
              size={25}
              color='#fff'
            ></BsCheck2Circle>
            <span>Speed up the process from creating an offer to delivery</span>
          </li>
          <li className='flex items-start gap-4 text-white'>
            <BsCheck2Circle
              className='flex-shrink-0'
              size={25}
              color='#fff'
            ></BsCheck2Circle>
            <span>Automize the process of creating an offer</span>
          </li>
        </ul>
        <div className='p-4 flex justify-between'>
          <Button
            className='text-white border-solid border-[1px] rounded-none border-white'
            label='Sign Up Here!'
          >
            <Link href='/register' />
          </Button>
          <Button className='text-white font-semibold' label='Details here'>
            <Link href='/'></Link>
          </Button>
        </div>
      </aside>
      <div className='absolute bg-white w-[600px] max-h-fit z-1 left-[50%] top-[15%] rounded-lg text-center p-5'>
        <Typography variant='h4'>Sign Up</Typography>
        <div className='p-12 w-full flex flex-col justify-between border-solid border-[1px] border-gray-300 rounded-sm'>
          <Input
            id='email'
            label='Email Address'
            register={register}
            disabled={isLoading}
            errors={errors}
            required
          />
          <Input
            id='company'
            label='Company Name'
            register={register}
            disabled={isLoading}
            errors={errors}
            
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            disabled={isLoading}
            errors={errors}
            required
          />

          <Button
            label='Sign in with Google'
            className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300'
          >
            <span className='m-2 text-xl'>
              <FontAwesomeIcon icon={faGoogle} />
            </span>{" "}
          </Button>
          <div className='w-full flex flex-col justify-between items-center mt-5'>
            <Button
              label='Sign Up'
              onClick={handleSubmit(onSubmit)}
              className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'
            />
            <span className='text-sm'>
              Already have an account?{" "}
              <Button label='Sign In!' className='text-xs'>
                <Link href='/login'></Link>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
