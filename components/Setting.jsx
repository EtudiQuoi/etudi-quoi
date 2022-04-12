import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import RoundButton from "./RoundButton";
import Button from "./Button";
import Logo from "./Logo";

const Setting = ({ setIsOpenSetting }) => {
  const closeSetting = () => {
    setIsOpenSetting(false);
  };

  return (
    <Container>
      <Grid>
        <GridItem area="header">
          <HeaderContainer>
            <h1>Paramètres</h1>
            <RoundButton onClick={closeSetting} layout="cross" size="medium" />
          </HeaderContainer>
        </GridItem>
        <GridItem area="content">
          <ContentContainer>
            <SectionContent>
              <H2>Résultats</H2>
              <Content>
                <P
                  css={css`
                    margin-bottom: 1rem;
                  `}
                >
                  Tu peux réinitialiser tes résultats afin de recommencer le
                  questionnaire et obtenir de nouvelles propositions de
                  formations.
                </P>
                <Button type="primary">Réinitialiser mes résultats</Button>
              </Content>
            </SectionContent>
            <SectionContent>
              <H2>Qui sommes-nous ?</H2>
              <Content>
                <P>
                  Etudi’quoi est un projet porté par des étudiants au sein de
                  l’IUT Bordeaux Montaigne en MMI, formation pluridisciplinaire
                  dans les metiers du web et du multimédia.
                </P>
              </Content>
            </SectionContent>
            <SectionContent>
              <H2>Partenaires</H2>
              <Content>
                <P>
                  Tu peux réinitialiser tes résultats afin de recommencer le
                  questionnaire et obtenir de nouvelles propositions de
                  formations.
                </P>
              </Content>
            </SectionContent>
          </ContentContainer>
        </GridItem>
        <GridItem area="footer">
          <Link href="/contact">
            <A>Nous contacter</A>
          </Link>
          <Link href="/cgu">
            <A>Conditions générales d'utilisation</A>
          </Link>
          <Logo type="setting-icon" />
          <p>© Etudi’quoi 2022</p>
        </GridItem>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  margin: auto;
  height: 100vh;
  width: 100vw;
  padding: 1rem 0;
  max-width: 480px;
  background: ${({ theme }) => theme.backgroundGradient};
  text-align: center;
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr 15vh;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;
`;

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
  padding: 0 2rem;
  justify-content: space-around;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const H2 = styled.h2`
  text-align: left;
`;

const A = styled.a`
  color: ${({ theme }) => theme.darkShade};
  border-bottom: 1px solid ${({ theme }) => theme.darkShade};
`;

const Content = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  padding: 1rem;
`;

const P = styled.p`
  text-align: left;
  font-size: 0.9rem;
`;

export default Setting;
