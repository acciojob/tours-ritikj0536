import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import data from "./data";
import "../styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(data);
    setLoading(false);
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <h2>No tours left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </main>
    );
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
