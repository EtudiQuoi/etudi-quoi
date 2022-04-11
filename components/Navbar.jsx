import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import CardIcon from "../icons/CardIcon";
import ChartIcon from "../icons/ChartIcon";

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <Link href="/questions">
        <a title="Swipe">
          <CardIcon active={router.pathname === "/"} />
        </a>
      </Link>
      <Link href="/results">
        <a title="Résultats">
          <ChartIcon active={router.pathname === "/results"} />
        </a>
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

// const NavItem = styled(Link)`
//     cursor: pointer;
// `;
