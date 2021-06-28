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
    <nav className="flex shadow-lg space-x-8  justify-between">
      <div className="ml-10">
        <Image src="/logo.png" alt="logo" width="150" height="150" />
      </div>
      <ul className="hidden items-center  space-x-8 flex-auto lg:flex ">
        <li>
          <a href="/" className="border-l-2 pl-10 hover:text-red-500">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-red-500">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-red-500 ">
            About
          </a>
        </li>
        <li>
          <a href="/signIn" className="hover:text-red-500 ">
            Sign In
          </a>
        </li>
        <li>
          <a href="/signUp" className="hover:text-red-500 ">
            Sign up
          </a>
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
