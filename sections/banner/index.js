import React from "react";

const Banner = ({ text, photo }) => {
  return (
    <div className="relative w-full shadow-lg h-banner">
      <p className=" text-6xl text-gray-100 w-full h-full items-center flex justify-center absolute z-10">
        {text}
      </p>
      <img src={photo} className="w-full object-cover inline h-full" />
    </div>
  );
};

export default Banner;
