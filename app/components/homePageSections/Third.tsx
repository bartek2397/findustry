"use client";

import Heading from "../Heading";
import ListItem from "./homePageComponents/ListItem";

const Third = () => {
  return (
    <section className='h-[100vh]'>
      <div className='max-w-[1440px] m-auto pt-24'>
        <Heading
          title='Learn about the key functionalities of FinDustry platform'
          titleStyle='text-5xl pr-24'
        />
        <div>
            <ListItem />
        </div>
      </div>
    </section>
  );
};

export default Third;
