import React from "react";

export const DestinationCard = ({ destination }) => {
  return (
    <div className="flex items-center rounded-sm  bg-white shadow-lg overflow-hidden ">
      <img
        className="h-full object-cover w-32 flex-shrink-0"
        src={destination.data().imgUrl}
        alt="hi"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.data().name}
        </h3>
        <p className="text-gray-600">{destination.data().area}</p>
        <p className="text-gray-600">{destination.data().env}</p>
        <div className="mt-4">
          <p
            href="/"
            className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm"
            onClick={() => {
              console.log(destination.id);
            }}
          >
            More...
          </p>
        </div>
      </div>
    </div>
  );
};
