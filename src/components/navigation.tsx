"use client"
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const NavigationMenuDemo = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="satoshi-bold-italic">vortechs</h1>
      <NavigationMenu.Root className="flex justify-end">
        <NavigationMenu.List className="flex justify-center bg-white p-1 gap-1 rounded-full">
          
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
              work
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
              studio
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
              about
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center justify-between px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
              contact
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

      </NavigationMenu.List>
    </NavigationMenu.Root>
    </div>
    
  );
};

export default NavigationMenuDemo;

