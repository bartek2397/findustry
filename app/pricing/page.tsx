"use client";

import Navbar from "../components/navbar/Navbar";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='max-w-[1440px] h-screen m-auto text-center flex justify-center'>
        <PricingCard title='Basic Plan' price={0.0} btnText='Try for free!' />
        <PricingCard title='Pro Plan' price={39.99} btnText='Sign Up!' />
        <PricingCard title='Ultra Plan' price={59.99} btnText='Sign Up!' />
      </div>
    </div>
  );
};

export default Pricing;
