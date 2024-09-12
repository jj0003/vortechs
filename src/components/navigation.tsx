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
        <NavigationMenu.List className="flex justify-center bg-white p-1 gap-1 rounded-full">
          
          <NavigationMenu.Item>
            <Link href="/" passHref>
              <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                home
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

