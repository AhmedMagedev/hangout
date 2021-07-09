import { useRouter } from "next/router";
import useSWR from "swr";
import { DestinationCard } from "components/DestinationCard";
import Btn from "components/Btn";
import { FaSpinner } from "react-icons/fa";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Destintaion() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/destination/${id}`, fetcher);

  if (!data) {
    return (
      <div className=" h-80 my-52 w-full text-center flex justify-center">
        <FaSpinner aria-label="loading" className="animate-spin w-24 h-auto" />
      </div>
    );
  }

  return (
    <div>
      <img
        src={data.imgUrl}
        className="h-full object-cover w-36 m-auto mt-16"
      />
      <div className="bg-white shadow-lg overflow-hidden max-w-4xl m-auto my-20 ">
        <div className="px-4 py-5 ">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {data.name}
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 ">
              <dt className="text-base font-medium text-gray-500">Category</dt>
              <dd className="mt-1 text-base text-gray-900 ">{data.category}</dd>
            </div>
            <div className="bg-white px-4 py-5 ">
              <dt className="text-base font-medium text-gray-500">Area</dt>
              <dd className="mt-1 text-base text-gray-900 ">{data.area}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 ">
              <dt className="text-base font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-base text-gray-900 ">{data.base}</dd>
            </div>
            <div className="bg-white px-4 py-5 ">
              <dt className="text-bas font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-bas text-gray-900 ">{data.phone}</dd>
            </div>
            <div className="bg-white px-4 py-5 ">
              <dt className="text-bas font-medium text-gray-500">
                Workin hours
              </dt>
              <dd className="mt-1 text-bas text-gray-900 ">
                {data.workingHours}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 ">
              <dt className="text-bas font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-bas text-gray-900 ">{data.location}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 ">
              <dt className="text-bas font-medium text-gray-500">
                Descreption
              </dt>
              <dd className="mt-1 text-bas text-gray-900 ">
                {data.description}
              </dd>
            </div>
            {data.category === "Café" ? (
              <div className="bg-white px-6 py-5 justify-between flex items-center">
                <dt className="text-lg font-medium text-gray-700 text-center ">
                  Reserve
                </dt>
                <a href="/form">
                  <Btn text="Book" />
                </a>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Destintaion;
