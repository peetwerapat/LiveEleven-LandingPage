import React, { useState, useRef } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import Image from "next/image";
import ServicesItems from "./ServicesItems";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutIdRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <Menu>
      {() => (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <MenuButton>
            <div className="flex items-center gap-2">
              <h2 className="text-sm md:text-xl font-head">Services</h2>
              <Image
                className="w-2 h-2"
                src="/arrow-down.png"
                width={100}
                height={100}
                alt="arrow-down"
              />
            </div>
          </MenuButton>
          {isOpen && (
            <MenuItems className="flex flex-col bg-white rounded-lg lg:absolute lg:w-32">
              <ServicesItems />
            </MenuItems>
          )}
        </div>
      )}
    </Menu>
  );
};

export default ServicesDropdown;

