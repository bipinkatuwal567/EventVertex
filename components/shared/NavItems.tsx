'use client';

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
    const pathName = usePathname();

  return (
    <ul className="md:flex-between w-full flex items-start flex-col md:flex-row gap-5">
      {headerLinks.map((item) => {
        const isActive = item.route === pathName;
        return( 
            <li key={item.route} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
                <Link href={item.route}>{item.label}</Link>
            </li>)
      })}
    </ul>
  );
};

export default NavItems;
