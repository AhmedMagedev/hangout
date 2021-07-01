import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="justify-center flex bg-indigo-light">
      <div className=" h-100 justify-center flex text-gray-300">
        <div className="w-3/4   my-10 lg:flex ">
          <div className="m-16 h-60 w-60">
            <img
              src="/logoLight.png"
              className="lg:w-60 h-auto lg:flex block"
            />
          </div>
          <div className="m-16">
            <p className="text-4xl mb-5 text-white">Company</p>
            <div className=" text-xl space-y-4">
              <p>5 Abu Al Feda Administrative Building, Zamalek, Cairo</p>
              <p>+20 1007890751</p>
              <p>Business.Inquiries@Khroga.com</p>
            </div>
          </div>
          <div className="m-16">
            <p className="text-4xl mb-5 text-white">Instgram</p>
            <div className=" grid gap-6 grid-cols-2 xl:grid-cols-3">
              <Image
                src="/seattle.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
              <Image
                src="/miami.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
              <Image
                src="/toronto.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
              <Image
                src="/colorado.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
              <Image
                src="/chicago.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
              <Image
                src="/malibu.jpg"
                width="100"
                height="100"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
