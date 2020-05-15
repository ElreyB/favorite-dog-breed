import React from "react";
import styled from "styled-components";
import { object, string, func } from "prop-types";
import upperCaseName from "../../utils/upperCaseName";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 5px;
  border: 2px solid;
  font-size: 16px;
`;

const ImageWrapper = styled.div`
  margin: auto;
  margin-bottom: 10px;
  width: 60%;
  border: 3px solid black;
  padding: 10px;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Card({ breed, onClick, message }) {
  const { name, image } = breed;
  return (
    <Wrapper>
      <h2>{upperCaseName(name)}</h2>
      <ImageWrapper>
        <Img src={image} alt={name} />
      </ImageWrapper>
      <Button type="button" onClick={() => onClick({ name, image })}>
        {message}
      </Button>
    </Wrapper>
  );
}

Card.propTypes = {
  breed: object.isRequired,
  onClick: func.isRequired,
  message: string.isRequired,
};
