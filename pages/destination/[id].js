import { useRouter } from "next/router";
import useSWR from "swr";
import { DestinationCard } from "components/DestinationCard";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Destintaion() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/destination/${id}`, fetcher);

  if (!data) {
    return "Loading...";
  }

  return (
    <div className="flex items-center rounded-sm  bg-white shadow-lg overflow-hidden ">
      <img
        className="h-full object-cover w-32 flex-shrink-0"
        src={data.imgUrl}
        alt="hi"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
        <p className="text-gray-600">{data.area}</p>
        <p className="text-gray-600">{data.env}</p>
      </div>
    </div>
  );
}

export default Destintaion;
