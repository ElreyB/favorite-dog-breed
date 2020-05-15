import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import API from "./utils/API";
import Card from "./components/Card";
import Favorites from "./components/Favorites";

function App() {
  const [query, setQuery] = useState({ name: "", image: "" });
  const [breeds, setBreeds] = useState([]);
  const [favBreeds, setFavBreeds] = useState([]);

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

  const addToFavs = (breed) => {
    setFavBreeds([...favBreeds, breed]);
  };

  console.log(query, breeds);
  return (
    <div>
      <Search onChange={handleOnChange} query={query.name} breeds={breeds} />

      {query.name && query.image && (
        <Card breed={query} onChange={addToFavs} onClick={addToFavs} />
      )}

      {favBreeds.length > 0 ? (
        <Favorites favBreeds={favBreeds} />
      ) : (
        "You have no favorties at this time."
      )}
    </div>
  );
}

export default App;
