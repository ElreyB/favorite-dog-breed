import React from "react";
import { object, string, func } from "prop-types";
import upperCaseName from "../../utils/upperCaseName";

export default function Card({ breed, onClick, message }) {
  const { name, image } = breed;
  return (
    <div>
      <h2>{upperCaseName(name)}</h2>
      <img src={image} alt={name} />
      <button type="button" onClick={() => onClick({ name, image })}>
        {message}
      </button>
    </div>
  );
}

Card.propTypes = {
  breed: object.isRequired,
  onClick: func.isRequired,
  message: string.isRequired,
};
