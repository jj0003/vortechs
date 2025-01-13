"use client"
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const NavigationMenuDemo = () => {
  return (
    <div className="">
      <div className='justify-between items-center w-full px-5 py-2'>
        
      </div>

      <div className=''>
      <NavigationMenu.Root className="flex justify-end">
        <NavigationMenu.List className="flex justify-center items-center bg-white p-1 gap-2 rounded-full">
        

          <NavigationMenu.Item>
            <Link href="https://cal.com/vortechs/30min" passHref>
              <NavigationMenu.Trigger className="flex items-center text-white justify-between bg-[#0049FF] 
             hover:bg-white border-[#0049FF] border-2 hover:text-[#0049FF] px-6 py-2 rounded-full transition-colors duration-200 ease-in-out">
                book a call
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>

        </NavigationMenu.List>
      </NavigationMenu.Root>
      </div>
      
    </div>
    
  );
};

export default NavigationMenuDemo;

