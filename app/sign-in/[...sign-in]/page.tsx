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
import Input from "../../components/inputs/Input";
import { SignIn } from '@clerk/nextjs'

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
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl='/' />
    </div>
  )
};

export default Login;
