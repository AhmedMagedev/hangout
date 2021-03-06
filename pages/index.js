import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Btn from "components/Btn";
import { DestinationCard } from "components/DestinationCard";
import Banner from "sections/banner";
import { SearchIcon } from "@heroicons/react/solid";
import Badges from "sections/badges";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { FaSpinner } from "react-icons/fa";

export default function Home() {
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [listings, isLoading, error] = useCollection(
    firebase
      .firestore()
      .collection("locations")
      .where("category", ">=", query)
      .where("category", "<=", query + "~")
      .limit(9),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      <Banner text="Enjoy Egypt" photo="/banner.jpg" />
      <div className="w-full h-32 bg-indigo-light justify-center ">
        <div className="flex justify-center items-center h-full space-x-5">
          <p className="text-xl text-gray-100">What do you need?</p>
          <Btn
            text="Eat"
            fun={() => {
              setQuery("Restaurant");
            }}
          />
          <Btn
            text="Chill"
            fun={() => {
              setQuery("Café");
            }}
          />
          <Btn
            text="Explore"
            fun={() => {
              setQuery("Entertainment");
            }}
          />
          <Btn
            text="All"
            fun={() => {
              setQuery("");
            }}
          />
          <a
            href="/search"
            className="px-9 py-3 hover:bg-red-300 hover:border-red-300 hover:-translate-y-0.5 transform transition border-red-400 border-2 text-lg rounded-lg"
          >
            <SearchIcon className="text-gray-50 w-5" />
          </a>
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 mb-36">
        <h2 className="text-2xl text-gray-900 text-center mt-24">
          Popular destinations
        </h2>
        <p className="my-2 text-gray-600 text-center text-xl">
          A selection of great experience with lots to see and explore.
        </p>
        {isLoading && (
          <div className="mt-24 justify-center flex">
            <FaSpinner
              aria-label="loading"
              className="animate-spin w-24 h-auto"
            />
          </div>
        )}
        <div className="mt-20 grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
          {listings
            ? listings.docs.map((destination) => (
                <DestinationCard
                  destination={destination.data()}
                  id={destination.id}
                  key={destination.id}
                />
              ))
            : null}
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-2 xl:grid-cols-3"></div>
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
