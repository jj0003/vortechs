"use client"
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const NavigationMenuDemo = () => {
  return (
    <div className="">
      <NavigationMenu.Root className="flex justify-end">
        <NavigationMenu.List className="flex justify-center bg-white p-1 gap-1 rounded-full">
          
          <NavigationMenu.Item>
            <Link href="/work" passHref>
              <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                work
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link href="/studio" passHref>
              <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                studio
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link href="/about" passHref>
              <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                about
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link href="/contact" passHref>
              <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                contact
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>

        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
    
  );
};

export default NavigationMenuDemo;

