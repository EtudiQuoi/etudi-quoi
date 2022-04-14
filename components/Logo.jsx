import { ThemeContext } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Logo(props) {
  if (props.type === "setting-icon") {
    return (
      <H3 {...props}>
        <span>Etudi'</span>quoi
      </H3>
    );
  }
  return (
    <H1 {...props}>
      <Link href="/">
        <a title="Etudi'Quoi">
          <span>Etudi'</span>quoi
        </a>
      </Link>
    </H1>
  );
}

const H1 = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.accent};

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.primary};
  }

  ${(props) => {
    if (props.size === "big") {
      return css`
        font-size: 3.563rem;
      `;
    } else {
      return css`
        font-size: 2.813rem;
      `;
    }
  }}
`;

const H3 = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.primaryHover};

  span {
    color: ${({ theme }) => theme.primary};
  }

  font-size: 2rem;
`;
