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

const Image = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Name = styled.h2``;

export default function Card({ breed, onClick, message, imageSize }) {
  const { name, image } = breed;
  return (
    <Wrapper>
      <Name>{upperCaseName(name)}</Name>
      <Image image={image} size={imageSize} />
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
  imageSize: string,
};

Card.defaultProps = {
  imageSize: "med",
};
