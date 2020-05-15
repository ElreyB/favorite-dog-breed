import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import API from "./utils/API";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    API.getBreeds().then(({ data }) => {
      const breedsArr = Object.keys(data.message);
      setBreeds(breedsArr);
    });
  }, []);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(query, breeds);
  return (
    <div>
      <Search onChange={handleOnChange} query={query} breeds={breeds} />
      <Card />
    </div>
  );
}

export default App;
