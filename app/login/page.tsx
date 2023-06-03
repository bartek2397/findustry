"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import blob from "../../images/blob-scene-haikei.svg";
import { Typography, TextField, InputLabel, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import Heading from "../components/Heading";

import { BsCheck2Circle } from "react-icons/bs";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/");
      }
      if (callback?.error) {
        window.alert("Something went wrong");
      }
    });
  };

  return (
    <div>
      <aside className="w-[20%] bg-[#8d2bd7] h-screen flex flex-col items-center ml-0 p-8">
        <Heading titleStyle="text-white" title='Findustry App helps you to:' />
        <div>
          <ul className="flex flex-col justify-between list-none h-[40%] p-4 m-0">
            <li className="flex items-start gap-3 text-white">
                <BsCheck2Circle size={25} color='#fff'></BsCheck2Circle>
                <span>Finding the contractor to make detail products</span>
            </li>
            <li className="flex items-start gap-3 text-white">
                <BsCheck2Circle size={25} color='#fff'></BsCheck2Circle>
                <span>Finding new customers for services you provide</span>
            </li>
            <li className="flex items-start gap-3 text-white">
                <BsCheck2Circle size={25} color='#fff'></BsCheck2Circle>
                <span>Speed up the process from creating an offer to delivery</span>
            </li>
            <li className="flex items-start gap-3 text-white">
                <BsCheck2Circle size={25} color='#fff'></BsCheck2Circle>
                <span>Automize the process of creating an offer</span>
            </li>
          </ul>
        </div>
      </aside>
      <div className='absolute bg-white w-[400px] max-h-fit z-1 left-[50%] -translate-x-[50%] top-[30%] rounded-lg text-center p-5'>
        <Typography variant='h4'>Sign In</Typography>
        <div className='p-3 w-full flex flex-col justify-between'>
          <Input
            id='email'
            label='Email Address'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id='password'
            label='Password'
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Button
            variant='text'
            className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300'
            color='secondary'
          >
            <span className='m-2 text-xl'>
              <FontAwesomeIcon icon={faGoogle} />
            </span>{" "}
            Sign in with Google
          </Button>
          <div className='w-full flex flex-col justify-between items-center mt-5'>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant='contained'
              className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'
            >
              Sign In
            </Button>
            <span className='text-sm'>
              Don't have an account?{" "}
              <Button variant='text' className='text-xs'>
                <Link href='/register'>Sign Up!</Link>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
