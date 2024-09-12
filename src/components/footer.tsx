import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-black rounded-md py-5 px-10 h-auto md:h-96">
      {/* Centered title */}
      <div className="flex justify-center md:justify-start">
        <h1 className="satoshi-bold lg:text-8xl md:text-6xl text-4xl text-white uppercase tracking-tighter text-center md:text-left">
          vortechs
        </h1>
      </div>

      {/* Booking button for larger screens */}
      <div className="absolute top-5 right-10 hidden md:block">
        <Link href="https://cal.com/vortechs/30min" className="btn btn-tertiary">
          Book a free call today
        </Link>
      </div>

      {/* Booking button for smaller screens */}
      <div className="mt-10 text-center md:hidden">
        <Link href="https://cal.com/vortechs/30min" className="btn btn-tertiary">
          Book a free call today
        </Link>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-5 left-10 text-white hidden md:block">
        <p>© 2024 Vortechs. All rights reserved.</p>
      </div>

      {/* Bottom Left Text for smaller screens */}
      <div className="mt-10 text-white text-center md:hidden">
        <p>© 2024 Vortechs. All rights reserved.</p>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-5 right-10 text-white hidden md:block">
        <Link href="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms-of-service" className="hover:text-blue-400">
          Terms of Service
        </Link>
      </div>

      {/* Bottom Right Text for smaller screens */}
      <div className="mt-4 text-white text-center md:hidden">
        <Link href="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms-of-service" className="hover:text-blue-400">
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default Footer;
