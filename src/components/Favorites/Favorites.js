import React from "react";
import Card from "../Card";

export default function Favorites({ favBreeds, onClick }) {
  return (
    <div>
      {favBreeds.map((breed, index) => (
        <Card
          key={index}
          breed={breed}
          message="Remove breed"
          onClick={onClick}
        />
      ))}
    </div>
  );
}
