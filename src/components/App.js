import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import data from "./data";
import "../styles/App.css";


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // load local data
  useEffect(() => {
    setTours(data);
    setLoading(false);
  }, []);

  // remove tour
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // loading state
  if (loading) {
    return <Loading />;
  }

  // no tours left
  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
