import React from "react";
import logo from "../../assets/logo light.png";
import tronto from "../../img/toronto.jpg";
import seattle from "../../img/seattle.jpg";
import miami from "../../img/miami.jpg";
import malibu from "../../img/malibu.jpg";
import colorado from "../../img/colorado.jpg";
import chicago from "../../img/chicago.jpg";

const Footer = () => {
  return (
    <footer className="justify-center flex bg-indigo-light">
      <div className=" h-100 justify-center flex text-gray-300">
        <div className="w-3/4   my-10 lg:flex ">
          <div className="m-16">
            <img
              src={logo}
              alt="logo"
              className="lg:w-60 h-auto lg:flex block"
            ></img>
          </div>
          <div className="m-16">
            <p className="text-4xl mb-5 text-white">Company</p>
            <div className=" text-xl space-y-4">
              <p>5th flora, 700/D kings road, green</p>
              <p>lane New York-1782</p>
              <p>+10 367 826 2567</p>
              <p>contact@carpenter.com</p>
            </div>
          </div>
          <div className="m-16">
            <p className="text-4xl mb-5 text-white">Instgram</p>
            <div className=" grid gap-6 grid-cols-2 xl:grid-cols-3">
              <img
                className="w-20 rounded-md h-auto"
                src={tronto}
                alt="tronto"
              ></img>
              <img
                className="w-20 rounded-md h-auto"
                src={seattle}
                alt="tronto"
              ></img>
              <img
                className="w-20 rounded-md h-auto"
                src={malibu}
                alt="tronto"
              ></img>
              <img
                className="w-20 rounded-md h-auto"
                src={miami}
                alt="tronto"
              ></img>
              <img
                className="w-20 rounded-md h-auto"
                src={colorado}
                alt="tronto"
              ></img>
              <img
                className="w-20 rounded-md h-auto"
                src={chicago}
                alt="tronto"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
