import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  PhoneIcon,
  SearchIcon,
  BookmarkIcon,
  CalendarIcon,
  CameraIcon,
  MenuIcon,
} from "@heroicons/react/solid";

const Nav = () => {
  return (
    <nav className="flex shadow-lg space-x-8 max-h-28 justify-between">
      <Image src="/logo.png" alt="logo" width="100" height="150" />
      <ul className="hidden items-center  space-x-8 flex-auto lg:flex ">
        <li>
          <a href="/" className="border-l-2 pl-10">
            Home
          </a>
        </li>
        <li>
          <a href="/">
            Destination
            <ChevronDownIcon className="inline-flex w-6 " />
          </a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="justify-items-end items-center flex">
        <ul className="hidden items-center space-x-5 flex-auto mx-5 lg:flex">
          <li>
            <a href="/" className="border-r-2 pr-7">
              <PhoneIcon className=" inline-flex w-4 mx-1  text-red-400" />
              (+20)106449745
            </a>
          </li>
          <li>
            <a href="/">
              <BookmarkIcon className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
          <li>
            <a href="/">
              <CalendarIcon className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
          <li>
            <a href="/">
              <CameraIcon className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-red-500 hidden items-center p-10  lg:flex">
        <SearchIcon className=" w-5 text-white " />
      </div>
      <div className=" flex items-center p-10 lg:hidden  ">
        <MenuIcon className=" w-6 text-black  " />
      </div>
    </nav>
  );
};

export default Nav;
