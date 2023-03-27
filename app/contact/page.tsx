'use client'

import { TextField, FormControl, InputLabel, Input, Typography, TextareaAutosize } from "@mui/material";
import Navbar from "../components/Navbar";

const contact = () => {
  return ( 
    <div className="relative">
      <Navbar />
      <div className="min-w-[1440px] h-screen m-auto p-10 text-center absolute right-[50%] translate-x-[50%] translate-y-[10%]">
        <Typography variant="h5">Have a question? Contact us!</Typography>
        <div className="w-full h-[100%] flex justify-between mt-20">
          <div className="w-[40%] h-[20%] flex flex-col justify-between">
            <FormControl className="">
              <InputLabel htmlFor='email'></InputLabel>
              <TextField id='email' variant="outlined" label='Email Address'></TextField>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='subject'></InputLabel>
              <TextField id='subject' variant="outlined" label='Subject'></TextField>
            </FormControl>
          </div>
          <div className="w-[50%] h-[50%]">
            <FormControl className="w-full border-solid border-[1px] border-gray-300">
              <TextareaAutosize id="message" minRows={5} placeholder='Ask us a question' className="p-4" ></TextareaAutosize>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
