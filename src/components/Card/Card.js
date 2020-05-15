import React from "react";
import upperCaseName from "../../utils/upperCaseName";

export default function Card({ breed }) {
  const { name, image } = breed;
  console.log(name);
  return (
    <div>
      <h2>{name ?? upperCaseName(name)}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
