import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
function TripsList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPanding, error } = useFetch(url);

  return (
    <ul>
      <button
        onClick={() => setUrl("http://localhost:3000/trips?title=female")}
      >
        Female
      </button>
      <button onClick={() => setUrl("http://localhost:3000/trips?title=male")}>
        Male
      </button>
      <button onClick={() => setUrl("http://localhost:3000/trips")}>All</button>
      {isPanding && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {trips &&
        trips.map((trip, i) => {
          return <li key={i}>{trip.name}</li>;
        })}
    </ul>
  );
}

export default TripsList;
