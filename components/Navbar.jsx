import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Setting from "./Setting";

import CardIcon from "../icons/CardIcon";
import ChartIcon from "../icons/ChartIcon";
import SettingIcon from "../icons/SettingIcon";

export default function Navbar() {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const router = useRouter();

  const openSetting = () => {
    setIsOpenSetting(true);
  };

  return (
    <>
      <Container>
        {/* <EmptyDiv /> */}
        <Nav>
          <Ul>
            <li>
              <Link href="/questions">
                <A title="Swipe">
                  <CardIcon active={router.pathname === "/questions"} />
                  <Span>Cartes</Span>
                </A>
              </Link>
            </li>
            <li>
              <Link href="/results">
                <A title="Résultats">
                  <ChartIcon
                    active={
                      router.pathname === "/results" ||
                      router.pathname === "/ecoles"
                    }
                  />
                  <Span>Résultats</Span>
                </A>
              </Link>
            </li>
          </Ul>
        </Nav>
        {/* <SettingIcon onClick={openSetting} /> */}
      </Container>
      {isOpenSetting && <Setting setIsOpenSetting={setIsOpenSetting} />}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const EmptyDiv = styled.div`
  width: 30px;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 3rem;
  padding: 0.5rem 2.5rem;
  background: ${({ theme }) => theme.baseColor};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  list-style: none;
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

const SettingIconContainer = styled.div`
  // position: absolute;
  // right: 5%;
  // top: 50%;
  // transform: translateY(-50%);
`;

// const NavItem = styled(Link)`
//     cursor: pointer;
// `;
