import React from "react";
import styled from "styled-components/macro";
import { arrayOf, func, object } from "prop-types";
import Card from "../Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Favorites({ favBreeds, onClick }) {
  return (
    <Wrapper>
      {favBreeds.map((breed, index) => (
        <Card
          key={index}
          breed={breed}
          message="Remove breed"
          onClick={onClick}
          inList
        />
      ))}
    </Wrapper>
  );
}

Favorites.propTypes = {
  favBreeds: arrayOf(object).isRequired,
  onClick: func.isRequired,
};
