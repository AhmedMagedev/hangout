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
    <nav className="flex shadow-lg space-x-8 items-center justify-between sm:h-auto h-20">
      <div className="ml-10">
        <a href="/">
          <Image src="/logo.png" alt="logo" width="75" height="75" />
        </a>
      </div>
      <ul className="items-center lg:-ml-5 space-x-8 lg:flex-auto sm:flex hidden">
        <div className="flex space-x-6 items-center mr-36 lg:mr-0">
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
        </div>
        {user ? (
          <div className="lg:flex hidden">
            <p className="border-l-2 px-10 text-lg">{`Hi ${user.name} !`}</p>
            <button
              className=" transition text-red-400 font-bold text-lg"
              onClick={logout}
            >
              logout
            </button>
          </div>
        ) : (
          <li className="lg:flex hidden">
            <a href="/auth" className="hover:text-red-500 ">
              Sign In
            </a>
          </li>
        )}
      </ul>
      <div className="justify-items-end items-center  lg:flex hidden">
        <ul className=" items-center space-x-5 flex-auto mx-5 lg:flex">
          <li className="hidden lg:flex">
            <a href="/" className="border-r-2 pr-7">
              <PhoneIcon className=" inline-flex w-4 mx-1  text-red-400" />
              +20 1007890751
            </a>
          </li>
          <li className="hidden ">
            <a href="/">
              <FaFacebookF className="text-red-400" />
            </a>
          </li>
          <li className="hidden">
            <a href="/">
              <FaTwitter className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
          <li className="hidden ">
            <a href="/">
              <FaInstagram className=" inline-flex w-4 mx-1  text-red-400" />
            </a>
          </li>
        </ul>
      </div>
      <a href="/search">
        <div className="bg-red-500  items-center sm:p-14 p-10 w-full sm:h-40 flex sm:hover:px-20  hover:px-12 transition-all ">
          <SearchIcon className="sm:w-5 w-3 text-white " />
        </div>
      </a>
    </nav>
  );
};

export default Nav;
