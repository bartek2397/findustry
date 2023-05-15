"use client";

import { useState } from "react";
import Heading from "../../Heading";
import Image from "next/image";
import sketch from "../../../../images/isaac-smith-6EnTPvPPL6I-unsplash.jpg";
import offer from '../../../../images/scott-graham-OQMZwNd3ThU-unsplash.jpg'

export const list = [
  {
    id: 1,
    title: "Technology analysis of CAD files",
    bodyContent: (
      <>
        <div className='w-[40%]'>
          <Heading
            title='Technology analysis of CAD files'
            subtitle='Our software will analyze and specify elements for manufacturing companies that need to be produced and also allow to define things as a number of bends or holes.'
          />
        </div>
        <div className='w-[45%]'>
          <Image
            src={sketch}
            alt='Sketch'
            width={1000}
            height={1000}
            style={{ objectFit: "cover", borderRadius: "5%" }}
          />
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Generate automatic offer",
    bodyContent: (
      <>
        <div className='w-[40%]'>
          <Heading
            title='Generate automatic offer'
            subtitle='Sending offers have never been so easy! Use our innovative system and save your and your employees’ time. Create an offer by one click.'
          />
        </div>
        <div className='w-[45%]'>
          <Image
            src={offer}
            alt='Offer'
            width={1000}
            height={1000}
            style={{ objectFit: "cover", borderRadius: "5%" }}
          />
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Integration with applications",
    bodyContent: (
      <>
        <div className='w-[40%]'>
          <Heading
            title='Integration with applications'
            subtitle='Create your request or answer through the 4Dustry platform, which is linked with CAD/PDM/ERP.'
          />
        </div>
        <div className='w-[45%]'>
          <Image
            src={offer}
            alt='Offer'
            width={1000}
            height={1000}
            style={{ objectFit: "cover", borderRadius: "5%" }}
          />
        </div>
      </>
    ),
  },
];

const ListItem = () => {
  const [active, setActive] = useState<number>();

  return (
    <div>
      <ul className='flex justify-between pr-64 pt-12 text-xl'>
        {list.map((item) => {
          return (
            <li
              className={`${
                active === item.id ? "text-black" : "text-neutral-500"
              }`}
            >
              <button
                key={item.id}
                onClick={() => {
                  if (active === item.id) {
                    setActive(0);
                  } else {
                    setActive(item.id);
                  }
                }}
              >
                {item.title}
              </button>
              <div
                className={`${
                  active === item.id
                    ? "block w-full h-[7px] bg-yellow-400 rounded-md"
                    : "hidden"
                }`}
              ></div>
            </li>
          );
        })}
      </ul>
        {list.map((item) => {
          
          return (
            <div className={`h-full w-full flex justify-between items-center pt-52 ${active === item.id ? item.bodyContent : 'hidden'}`}>{item.bodyContent}</div>
          )
        })}
    </div>
  );
};

export default ListItem;
