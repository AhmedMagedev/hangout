import React from "react";
import {
  BadgeCheckIcon,
  CalculatorIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";

const Badges = () => {
  return (
    <div className="h-80 w-full bg-white flex justify-center items-center lg:space-x-40 space-x-20">
      <div className="text-4xl text-black space-y-3 justify-center text-center">
        <EmojiHappyIcon className=" inline-flex w-20 mx-1  text-red-400" />
        <p className="text-3xl text-black ">Happy</p>
        <p className="text-xl text-gray-600">
          makes you say sheeshh after every trip
        </p>
      </div>
      <div className="text-4xl text-black space-y-3 content-center justify-start text-center">
        <CalculatorIcon className=" inline-flex w-20 mx-1  text-red-400" />
        <p className="text-3xl text-black ">Calculated</p>
        <p className="text-xl text-gray-600">
          Will calculate trips for your broke ass
        </p>
      </div>
      <div className="text-4xl text-black space-y-3 justify-center text-center">
        <BadgeCheckIcon className=" inline-flex w-20 mx-1  text-red-400" />
        <p className="text-3xl text-black ">Top rated</p>
        <p className="text-xl text-gray-600">We only suggest dope places</p>
      </div>
    </div>
  );
};

export default Badges;
