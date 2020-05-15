import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import "./App.css";
import Search from "./components/Search";
import API from "./utils/API";
import getRandomIndex from "./utils/getRandomIndex";
import Card from "./components/Card";
import Favorites from "./components/Favorites";

const Section = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Panel = styled.div`
  width: 40%;
  height: 100vh;
`;

const P = styled.p`
  text-align: center;
  color: white;
`;

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
    const breedName = e.target.value;
    API.getBreed(breedName).then(({ data }) => {
      setQuery({ name: breedName, image: data.message });
    });
  };

  const addToFavs = (breed) => {
    if (favBreeds.filter(({ name }) => name === breed.name).length !== 1) {
      setFavBreeds([...favBreeds, breed]);
    }
  };

  const removeFromFavs = (breed) => {
    const updateFavs = favBreeds.filter(({ name }) => name !== breed.name);
    setFavBreeds(updateFavs);
  };

  const randomBreed = () => {
    const randomIndex = getRandomIndex(0, breeds.length - 1);
    const breedName = breeds[randomIndex];
    API.getBreed(breedName).then(({ data }) => {
      setQuery({ name: breedName, image: data.message });
    });
  };

  return (
    <div>
      <Search
        onChange={handleOnChange}
        query={query.name}
        breeds={breeds}
        randomBreed={randomBreed}
      />
      <Section>
        <Panel>
          {query.name && query.image && (
            <Card
              breed={query}
              onChange={addToFavs}
              onClick={addToFavs}
              message="Add Breed to Favorites"
              color="green"
            />
          )}
        </Panel>
        <Panel>
          {favBreeds.length > 0 ? (
            <Favorites favBreeds={favBreeds} onClick={removeFromFavs} />
          ) : (
            <P>You have no favorties at this time.</P>
          )}
        </Panel>
      </Section>
    </div>
  );
}

export default App;
