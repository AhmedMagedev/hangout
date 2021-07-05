import React from "react";
import Image from "next/image";
import Btn from "components/Btn";
import {
  ChevronDownIcon,
  PhoneIcon,
  SearchIcon,
  BookmarkIcon,
  CalendarIcon,
  CameraIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useUser } from "firebase/useUser";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Nav = () => {
  const { user, logout } = useUser();

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
          <a href="/about" className="hover:text-red-500 ">
            About
          </a>
        </li>
        {user ? (
          <div className="flex">
            <p className="border-l-2 px-10 text-lg">{`Hi ${user.name} !`}</p>
            <button
              className="  transition text-red-400 font-bold text-lg"
              onClick={logout}
            >
              logout
            </button>
          </div>
        ) : (
          <li>
            <a href="/auth" className="hover:text-red-500 ">
              Sign In
            </a>
          </li>
        )}
      </ul>
      <div className="justify-items-end items-center flex">
        <ul className="hidden items-center space-x-5 flex-auto mx-5 lg:flex">
          <li>
            <a href="/" className="border-r-2 pr-7">
              <PhoneIcon className=" inline-flex w-4 mx-1  text-red-400" />
              +20 1007890751
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebookF className="text-red-400" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
        </ul>
      </div>
      <a href="/search">
        <div className="bg-red-500 hidden items-center p-14 w-full h-full lg:flex hover:px-20 transition-all ">
          <SearchIcon className=" w-5 text-white " />
        </div>
      </a>
      <div className=" flex items-center p-10 lg:hidden  ">
        <MenuIcon className=" w-6 text-black  " />
      </div>
    </nav>
  );
};

export default Nav;
