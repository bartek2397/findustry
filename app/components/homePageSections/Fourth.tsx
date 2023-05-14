"use client";

import { useState } from "react";
import Heading from "../Heading";
import ListItem, { list } from "./homePageComponents/ListItem";

const Fourth = () => {
  const [active, setActive] = useState<number>();

  

  return (
    <section className='h-[100vh]'>
      <div className='max-w-[1440px] m-auto'>
        <Heading
          title='Learn about the key functionalities of FinDustry platform'
          titleStyle='text-5xl pr-24'
        />
        <div>
            <ListItem />
            {/* <ListItem title="Technology analysis of CAD files"></ListItem>
            <ListItem title='Generate automatic offer'></ListItem>
            <ListItem title='Integration with applications'></ListItem> */}
        </div>
      </div>
    </section>
  );
};

export default Fourth;
