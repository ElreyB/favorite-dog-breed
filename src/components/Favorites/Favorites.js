import React from "react";
import Card from "../Card";

export default function Favorites({ favBreeds }) {
  return (
    <div>
      {favBreeds.map((breed, index) => (
        <Card key={index} breed={breed} />
      ))}
    </div>
  );
}
