'use client'

import { TextField } from "@mui/material";
import Navbar from "./Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col">
                <h1 className='text-center m-auto text-3xl p-10 mt-20 '>
                    Business Finder Logo and Name...
                </h1>
                <div className="text-center">
                    <TextField className="w-[20%]" placeholder="What do you need today?"></TextField>
                </div>
            </div>
        </div>
    );
};

export default HomePage;