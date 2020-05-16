import React from "react";
import styled from "styled-components/macro";
import dogRunning from "../../assets/dog-running.gif";

const Image = styled.div`
  max-width: 100%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin-bottom: 10px;
  background-image: url(${dogRunning});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function Loading({ image }) {
  return <Image size={400} />;
}
