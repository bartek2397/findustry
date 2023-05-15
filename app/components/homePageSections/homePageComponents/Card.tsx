'use client'

import { BsCheck2Circle } from "react-icons/bs";
import Heading from "../../Heading";

interface CardProps {
    title: string;
    subtitle: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle }) => {
  return (
    <div className='row-span-2 bg-white h-[20vh] rounded-lg p-12 flex gap-4'>
      <BsCheck2Circle size={40} color='#8d2bd7'></BsCheck2Circle>
      <Heading
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default Card;
