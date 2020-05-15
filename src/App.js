import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import API from "./utils/API";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState({ name: "", image: "" });
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    API.getBreeds().then(({ data }) => {
      const breedsArr = Object.keys(data.message);
      setBreeds(breedsArr);
    });
  }, []);

  const handleOnChange = (e) => {
    const breadName = e.target.value;
    API.getBreed(breadName).then(({ data }) => {
      setQuery({ name: breadName, image: data.message });
    });
  };

  console.log(query, breeds);
  return (
    <div>
      <Search onChange={handleOnChange} query={query.name} breeds={breeds} />
      <Card data={query} />
    </div>
  );
}

export default App;
