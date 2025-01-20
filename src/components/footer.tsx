import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
<div 
      className="relative rounded-md py-5 px-10 h-auto md:h-96" 
      style={{ backgroundImage: 'url(/images/vortechs-background-businesscard.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >      {/* Centered title */}
      <div className="flex justify-center md:justify-start">
        <h1 className="satoshi-bold lg:text-8xl md:text-6xl text-4xl text-white uppercase tracking-tighter text-center md:text-left">
          vortechs
        </h1>
      </div>

      {/* Booking button for larger screens */}
      <div className="absolute top-5 text-white
             hover:bg-white border-white border-8 hover:text-black px-6 py-2 rounded-full transition-colors duration-200 ease-in-out text-center py-2 px-10 right-10 hidden md:block">
        <Link href="https://cal.com/vortechs/30min">
          book a free call today
        </Link>
      </div>

      {/* Booking button for smaller screens */}
      <div className="mt-10 text-white font-black
             hover:bg-white border-white border-4 hover:text-black px-6 py-2 rounded-full transition-colors duration-200 ease-in-out text-center py-2 px-10 md:hidden">
        <Link href="https://cal.com/vortechs/30min">
          book a free call today
        </Link>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-5 left-10 text-white hidden md:block">
        <p>© 2025 Vortechs. All rights reserved.</p>
      </div>

      {/* Bottom Left Text for smaller screens */}
      <div className="mt-10 text-white text-center md:hidden">
        <p>© 2025 Vortechs. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
