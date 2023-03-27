'use client'

import { useState } from "react";
import { Button } from "@mui/material";

const LoginForm = () => {


  return (
  <div className="flex flex-col items-center">
    <form className="w-full h-[120px] ml-5">
            <label htmlFor="loginInput">E-mail</label>
            <input type="email" placeholder="E-mail" id="loginInput" />
            <label htmlFor="PasswordInput">Password</label>
            <input type="password" placeholder="Password" id="passwordInput" />
    </form>
    <div className="w-full flex justify-between ml-5">
    <div>
        <Button variant="contained" className="bg-[#2270cf]" color="primary">Zaloguj</Button>
    </div>
    </div>
  </div>
)};

export default LoginForm;