import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { DestinationCard } from "components/DestinationCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [listings, isLoading, error] = useCollection(
    firebase
      .firestore()
      .collection("locations")
      .where("name", ">=", query)
      .where("name", "<=", query + "~"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
    setQueried(true);
  }
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 mb-36">
      <form onSubmit={handleSearchSubmit} className="relative">
        <input
          placeholder="Search places..."
          id="search"
          className="w-full flex border-2 border-red-400 rounded-md p-3 outline-none  transition-all"
        />
        <label
          htmlFor="search"
          className="absolute top-0 bottom-0 right-0 flex"
        >
          <button type="submit" className="px-10 bg-transparent text-gray-700">
            Search
          </button>
        </label>
      </form>

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
    </div>
  );
}
