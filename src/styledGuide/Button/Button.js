import React from "react";
import { string, node, func } from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 5px;
  border: 2px solid;
  font-size: 16px;
  background-color: ${({ theme, bgColor }) => theme?.colors?.[bgColor]};
`;

export default function Button({ children, onClick, bgColor, type, props }) {
  return (
    <StyledButton type={type} onClick={onClick} bgColor={bgColor} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  bgColor: string,
  type: string,
};

Button.defaultProps = {
  bgColor: "none",
  type: "button",
};
