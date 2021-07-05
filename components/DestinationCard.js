import React from "react";

export const DestinationCard = ({ destination, id }) => {
  return (
    <div className="flex items-center rounded-sm  bg-white shadow-lg overflow-hidden ">
      <img
        className="h-full object-cover w-32 flex-shrink-0"
        src={destination.imgUrl}
        alt="hi"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.name}
        </h3>
        <p className="text-gray-600">{destination.area}</p>
        <p className="text-gray-600">{destination.env}</p>
        <div className="mt-4">
          <a
            href={`/destination/${id}`}
            className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm"
          >
            More...
          </a>
        </div>
      </div>
    </div>
  );
};
