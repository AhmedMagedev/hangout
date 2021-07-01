import Head from "next/head";
import Image from "next/image";
import ReadFromCloudFirestore from "firebaseComponents/cloudFirestore/cloudFirestore/Read";
import WriteToCloudFirestore from "firebaseComponents/cloudFirestore/cloudFirestore/Write";
import Btn from "components/Btn";
import { DestinationCard } from "components/DestinationCard";
import Banner from "sections/banner";
import { SearchIcon } from "@heroicons/react/solid";
import Badges from "sections/badges";

export default function Home() {
  const popularDestinations = [
    {
      city: "Toronto",
      averagePrice: 120,
      propertyCount: 76,
      imageUrl: "/toronto.jpg",
      imageAlt: "Toronto skyline",
    },
    {
      city: "Malibu",
      averagePrice: 215,
      propertyCount: 43,
      imageUrl: "/malibu.jpg",
      imageAlt: "Cliff in Malibu",
    },
    {
      city: "Chicago",
      averagePrice: 130,
      propertyCount: 115,
      imageUrl: "/chicago.jpg",
      imageAlt: "Chicago skyline",
    },
    {
      city: "Seattle",
      averagePrice: 135,
      propertyCount: 63,
      imageUrl: "/seattle.jpg",
      imageAlt: "Seattle skyline",
    },
    {
      city: "Colorado",
      averagePrice: 85,
      propertyCount: 47,
      imageUrl: "/colorado.jpg",
      imageAlt: "Lake in Colorado",
    },
    {
      city: "Miami",
      averagePrice: 115,
      propertyCount: 86,
      imageUrl: "/miami.jpg",
      imageAlt: "Beach in Miami",
    },
  ];
  return (
    <div>
      <Banner text="Enjoy Egypt" photo="/banner.jpg" />
      <div className="w-full h-32 bg-indigo-light justify-center ">
        <div className="flex justify-center items-center h-full space-x-5">
          <p className="text-xl text-gray-100">What do you need?</p>
          <Btn text="Eat" />
          <Btn text="Chill" />
          <Btn text="Explore" />
          <div className="px-9 py-3 hover:bg-red-300 hover:border-red-300 hover:-translate-y-0.5 transform transition border-red-400 border-2 text-lg rounded-lg">
            <SearchIcon className="text-gray-50 w-5" />
          </div>
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 mb-36">
        <h2 className="text-2xl text-gray-900 text-center mt-24">
          Popular destinations
        </h2>
        <p className="my-2 text-gray-600 text-center text-xl">
          A selection of great experience with lots to see and explore.
        </p>
        <div className="mt-20 grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
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
      <Badges />
      <div className="w-full h-80  bg-gray-100 justify-center flex items-center space-x-20">
        <div className="h-52 lg:w-1/4 w-2/4 bg-white rounded-xl border-2 border-gray-200">
          <div className="flex justify-between">
            <div className="flex justify-self-center text-end">
              <img
                src="/reviewer.jpg"
                className="w-auto h-16 object-cover rounded-full my-4 mx-7"
              />
              <div className="m-auto">
                <p className="text-xl text-center m-auto font-semibold">
                  Ahmed Maged
                </p>
                <p className="text-base  m-auto font-extralight">Traveler</p>
              </div>
            </div>
            <img src="/quotation.png" className="w-auto h-7 m-7" />
          </div>
          <p className="text-xl mx-7 mt-5 border-t-2 border-t-gray-200 py-5">
            This is one of the best websites of all time
          </p>
        </div>
      </div>
    </div>
  );
}
