"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { title } from "process";
import { link } from "fs";

const itemstyles = "hover:text-accent-300 transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      path: "#homeSection",
    },
    {
      id: 2,
      title: "About",
      path: "#about",
    },
    {
      id: 3,
      title: "Services",
      path: "#services",
    },
    {
      id: 4,
      title: "Career",
      path: "#career",
    },
  ];

  return (
    <header
      className="w-full  h-[60px] flex items-center fixed bg-primary-600
      py-5  z-50 font-semibold  text-white"
    >
      <div className="container justify-between  font-serif flex items-center">
        <div className="text-xl font-bold">
          NEXT
          <span
            className=" text-accent-500 text-sm
           "
          >
            GEN
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? <IoIosClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <div className="flex justify-between gap-4 items-center">
          <nav
            className={` ${
              open ? "right-0" : "right-[-100%]"
            } w-[70%] md:w-auto absolute top-0 
          h-screen md:static md:h-auto 
        md:bg-transparent flex items-center duration-500 ease-in
         bg-black px-5 md:px-0 pt-20 md:pt-0`}
          >
            <ul
              className="flex flex-col text-white 
            md:font-semibold 
          md:flex-row gap-6 justify-center items-center"
            >
              {links.map((link) => (
                <li onClick={() => setOpen(false)} key={link.id}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <div className=" hidden md:flex px-5 justify-center items-center gap-6">
              <Link
                href="#"
                className={`${itemstyles}  
             `}
              >
                Home
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
