import React from "react";

const Btn = ({ text, link, fun }) => {
  return (
    <button
      onClick={fun}
      className="px-9 py-3 hover:bg-red-300  transition bg-red-400 hover:-translate-y-0.5 text-gray-50 text-lg rounded-lg  lg:inline hidden"
    >
      {text}
    </button>
  );
};

export default Btn;
