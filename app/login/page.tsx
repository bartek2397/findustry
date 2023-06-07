"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Typography, TextField, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import Heading from "../components/Heading";
import Button from "../components/Button";

import { FieldValues } from "../components/inputs/Input";
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
  console.log(errors)

  return (
    <div>
      <aside className="w-[20%] bg-[#8d2bd7] h-screen flex flex-col items-start mt-0 p-8">
        <Heading titleStyle="text-white pl-4" title='Findustry App will help you to:' />
          <ul className="flex flex-col justify-between list-none h-[30%] p-4 m-0 mb-0">
            <li className="flex items-start gap-4 text-white mb-4">
                <BsCheck2Circle className='flex-shrink-0' size={25} color='#fff'></BsCheck2Circle>
                <span>Find the contractor to make detail products</span>
            </li>
            <li className="flex items-start gap-4 text-white mb-4">
                <BsCheck2Circle className='flex-shrink-0' size={25} color='#fff'></BsCheck2Circle>
                <span>Find new customers for services you provide</span>
            </li>
            <li className="flex items-start gap-4 text-white mb-4">
                <BsCheck2Circle className='flex-shrink-0' size={25} color='#fff'></BsCheck2Circle>
                <span>Speed up the process from creating an offer to delivery</span>
            </li>
            <li className="flex items-start gap-4 text-white">
                <BsCheck2Circle className='flex-shrink-0' size={25} color='#fff'></BsCheck2Circle>
                <span>Automize the process of creating an offer</span>
            </li>
          </ul>
          <div className="p-4 flex justify-between">
            <Button className="text-white border-solid border-[1px] rounded-none border-white" label="Sign Up Here!">
              <Link href='/register' />
            </Button>
            <Button className="text-white font-semibold" label="Details here">
              <Link href='/'></Link>
            </Button>
          </div>
      </aside>
      <div className='absolute bg-white w-[600px] max-h-fit z-1 left-[50%] top-[15%] rounded-lg text-center p-5'>
        <Typography variant='h4'>Sign In</Typography>
        <div className='p-12 w-full flex flex-col justify-between border-solid border-[1px] border-gray-300 rounded-sm'>
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

          <Button
            label="Sign in with Google"
            className='mt-5 text-black border-solid border-[1px] hover:bg-gray-300'
          >
            <span className='m-2 text-xl'>
              <FontAwesomeIcon icon={faGoogle} />
            </span>{" "}
          </Button>
          <div className='w-full flex flex-col justify-between items-center mt-5'>
            <Button
            label="Sign In"
              onClick={handleSubmit(onSubmit)}
              className='w-full text-black border-solid border-[1px] hover:bg-[#a344ec] hover:text-white'
            />
            <span className='text-sm'>
              Don't have an account?{" "}
              <Button label="Sign Up!" className='text-xs'>
                <Link href='/register'></Link>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
