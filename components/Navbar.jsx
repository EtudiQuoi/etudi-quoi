import styled from "@emotion/styled";
import Link from "next/link";

import CardIcon from "../icons/CardIcon";
import ChartIcon from "../icons/ChartIcon";

export default function Navbar() {
    return (
        <Nav>
            <Link href="/"><a><CardIcon active /></a></Link>
            <Link href="/results"><a><ChartIcon /></a></Link>
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
