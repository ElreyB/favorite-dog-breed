import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [query, setQuery] = useState("");
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {}, []);
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);
  return (
    <div>
      <Search onChange={handleOnChange} query={query} />
    </div>
  );
}

export default App;
