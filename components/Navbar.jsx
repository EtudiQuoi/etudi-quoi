import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

import CardIcon from "../icons/CardIcon";
import ChartIcon from "../icons/ChartIcon";

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <Link href="/questions">
        <A title="Swipe">
          <CardIcon active={router.pathname === "/questions"} />
          <Span>Cartes</Span>
        </A>
      </Link>
      <Link href="/results">
        <A title="Résultats">
          <ChartIcon
            active={
              router.pathname === "/results" || router.pathname === "/ecoles"
            }
          />
          <Span>Résultats</Span>
        </A>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.baseColor};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const A = styled.a`
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

// const NavItem = styled(Link)`
//     cursor: pointer;
// `;
