import styled from "@emotion/styled";
import { css } from "@emotion/react";

import ArrowLinkIcon from "../icons/ArrowLinkIcon";

export default function Button({ onClick, size, type, outlink, children }) {
  return (
    <Btn onClick={onClick} size={size} type={type}>
      {children}
      {outlink && (
        <ArrowLinkIcon
          css={css`
            vertical-align: middle;
            margin-left: 0.5rem;
          `}
        />
      )}
    </Btn>
  );
}

const Btn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "Epilogue", sans-serif;
  font-weight: 600;
  ${(props) => {
    if (props.outlink) {
      return css`
        display: flex;
        align-items: center;
      `;
    }
  }}
  ${(props) => {
    if (props.size === "small") {
      return css`
        padding: 0.7rem 0.5rem;
        font-size: 0.8rem;
        min-height: 100%;
      `;
    } else {
      return css`
        padding: 1rem 2rem;
        font-size: 1rem;
      `;
    }
  }}
  ${(props) => {
    if (props.type === "primary") {
      return css`
        color: ${props.theme.baseColor};
        background: ${props.theme.primary};
      `;
    } else if (props.type === "secondary") {
      return css`
        color: ${props.theme.primary};
        background: transparent;
        border: 2px solid ${props.theme.primary};
      `;
    } else {
      return css`
        color: ${props.theme.primary};
        background: ${props.theme.baseColor};
      `;
    }
  }}
  border-radius: 0.5rem;
  box-shadow: 0px 8px 14px -13px rgba(77, 101, 169, 0.3);
  transition: transform ${({ theme }) => theme.transition};

  &:hover {
    transform: scale(1.1);
  }
`;
