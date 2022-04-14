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

  // function getCurrentUrl() {
  //   return window.location.href

  // }
  // const currentUrl = getCurrentUrl()

  // console.log (currentUrl);
  const currentPath = router.pathname;
  console.log (currentPath);

  return (
    <>

      <Container>
        {/* <EmptyDiv /> */}

          <Ul>
            <NavLI style={{ backgroundColor: currentPath === '/questions' ? '#0C53A3' : 'transparent' }}>
            <Link href="/questions">
                <A title="Questions">
                  <CardIcon active={router.pathname === "/questions"} />
                  <Span style={{ color: currentPath === '/questions' ? '#fff' : '0C53A3' }}>Cartes</Span>
                </A>
              </Link>
            </NavLI>
            <NavLI style={{ backgroundColor: currentPath === '/results' ? '#0C53A3' : 'transparent' }}>
              <Link href="/results">
                <A title="Résultats">
                  <ChartIcon style={{with:"4px"}}
                    active={
                      router.pathname === "/results" ||
                      router.pathname === "/ecoles"
                    }
                  />
                  <Span style={{ color: currentPath === '/results' ? '#fff' : '0C53A3' }}>Résultats</Span>
                </A>
              </Link>
            </NavLI>
          </Ul>

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


const Ul = styled.ul`
width: 14.125rem;
height: 4.313rem;
  display: inline-flex;
  padding: 0;
  background: ${({ theme }) => theme.baseColor};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  list-style: none;

`;
const NavLI = styled.li `
width: 50%;
border-radius:1rem;
margin: 0;
padding: 0.5rem 0;
`


const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.688rem;

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
