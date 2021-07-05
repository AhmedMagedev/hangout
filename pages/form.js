import React from "react";

export default function form() {
  return (
    <div className=" max-w-3xl mx-auto my-24">
      <p className=" text-6xl text-red-400 items-center flex justify-center m-24">
        Reserve
      </p>
      <form action="#" method="POST">
        <div className="shadow overflow-hidden ">
          <div className="px-16 py-20 bg-white ">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 ">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm  border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm  border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm  border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-4 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm  border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6  lg:col-span-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm  border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right ">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
