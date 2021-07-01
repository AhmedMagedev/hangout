import React from "react";
import Banner from "sections/banner";
import Badges from "sections/badges";

export default function About() {
  return (
    <div className="">
      <Banner text="About Us" photo="/banner.jpg" />
      <div>
        <div className=" m-36 w-3/4">
          <h1 className="text-6xl text-gray-800 m-20">Meet us!</h1>
          <div className=" ml-32">
            <p className="text-xl leading-relaxed text-gray-500 font-semibold mt-10  tracking-wider">
              Khroga is an entertainment providers aggregator that collects
              information about every entertainment location in Egypt to help
              people in exploring the hidden gems of our country. And that is
              why we strive to be the most visible and recognizable brand known
              for providing "packaged" entertainment services to Egypt's top
              destinations according to our customer’s budget and interests and
              help our service providers reach their full potential.
            </p>
            <p className="text-xl leading-relaxed text-gray-500 font-semibold mt-10 tracking-wider">
              Khroga Could be categorized as an ‘entertainment’ providers
              aggregator website that helps people discover new places and enjoy
              new experiences.
            </p>
            <p className="text-xl leading-relaxed text-gray-500 font-semibold mt-10 tracking-wider">
              with “Khroga” our aim is to make it easier for people to discover
              the country and promote the domestic tourism by enabling our users
              to explore new tastes and experiences from around the country, it
              is important as it helps those businesses to reach more users,
              promoting their brands, get customers feedback and grow more
              professionally and it goes on the economy, our services are done
              all online with just a few clicks by gathering comprehensive
              information for our users, so we empower them to make an informed
              decision.
            </p>
          </div>
        </div>
        <div className="w-full h-52 bg-indigo-light justify-center flex items-center space-x-5">
          <p className="text-4xl text-gray-100 hidden lg:inline">
            Subscribe Our Newsletter
          </p>

          <input
            className=" w-80 h-12 pl-5 rounded-md bg-gray-100 justify-center items-center"
            placeholder="Your mail"
          />
          <a href="/">
            <div className="px-9 py-3 bg-red-400 text-gray-50 text-lg rounded-lg hover:bg-red-300 transform transition hover:-translate-y-0.5">
              Subscribe
            </div>
          </a>
        </div>
      </div>
      <Badges />
    </div>
  );
}
