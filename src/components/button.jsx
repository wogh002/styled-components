import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selectedColor = theme[color];
    return css`
      background: ${selectedColor};
      margin-right: 1.5rem;
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `}
    `;
  }}
`;
const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};
const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;
const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;
const StyledBtn = styled.button`
  /* 공통스타일  */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 0.5rem;
  /* 기타 */
  & + & {
    margin-left: 0rem;
  }
  /* 크기 */
  ${sizeStyles}
  /* 색상 */
  ${colorStyles}
  ${fullWidthStyle}
`;

const Button = ({ children, color, outline, size, fullWidth, ...reset }) => {
  return (
    <StyledBtn
      color={color}
      outline={outline}
      size={size}
      fullWidth={fullWidth}
      {...reset}
    >
      {children}
    </StyledBtn>
  );
};
Button.defaultProps = {
  color: "blue",
  size: "medium",
};
export default Button;
