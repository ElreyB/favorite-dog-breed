import React from "react";
import styled from "styled-components/macro";
import { arrayOf, func, object } from "prop-types";
import Card from "../Card";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Favorites({ favBreeds, onClick }) {
  return (
    <Wrapper>
      {favBreeds?.map((breed, index) => (
        <Card
          key={index}
          breed={breed}
          message="Remove breed"
          onClick={onClick}
          imageSize={150}
          color="red"
        />
      ))}
    </Wrapper>
  );
}

Favorites.propTypes = {
  favBreeds: arrayOf(object).isRequired,
  onClick: func.isRequired,
};
