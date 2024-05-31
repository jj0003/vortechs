import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-black rounded-md py-5 px-10 h-96">
      <div className="">
        <h1 className="satoshi-bold lg:text-8xl text-7xl text-white uppercase tracking-tighter">
          vortechs
        </h1>
      </div>
      <div className="absolute top-5 right-10">
        <Link href="https://cal.com/vortechs/30min" className="btn btn-tertiary">
          Book a free call today
        </Link>
      </div>
    </div>
  );
};
export default Footer;

