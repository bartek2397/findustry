'use client'

import React from "react";

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    titleStyle?: string;
    subtitleStyle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, titleStyle, subtitleStyle }) => {
  return (
    <div className={`${center ? 'text-center' : 'text-start'}`}>
      <div className={`text-2xl font-bold ${titleStyle}`}>
        {title}
      </div>
      <div className={`font-light text-neutral-500 mt-6 ${subtitleStyle}`}>
        {subtitle}
      </div>
    </div>
  )
};

export default Heading;
