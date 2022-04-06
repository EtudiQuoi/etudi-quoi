import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";

import { Container } from "../shared/styles";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TutoSlide from "../components/TutoSlide";

import Link from "next/link";

const Tutorial = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const changeSlide = () => {
    setSlideNumber(slideNumber + 1);
  };

  return (
    <Container>
      <Grid>
        <GridItem area="header">
          <Logo />
        </GridItem>
        <GridItem area="subtitle">
          <H2>
            {slideNumber === 1
              ? "Swipe les propositions qui te caractérisent"
              : slideNumber === 2
              ? "Découvre les formations qui te correspondent"
              : "Choisis la formation qui te convient"}
          </H2>
        </GridItem>
        <GridItem area="slider">
          <TutoSlide slideNumber={slideNumber} />
        </GridItem>
        <GridItem area="button">
          <Bullets>
            <Bullet active={slideNumber === 1} />
            <Bullet active={slideNumber === 2} />
            <Bullet active={slideNumber === 3} />
          </Bullets>
          {slideNumber < 3 ? (
            <Button onClick={changeSlide}>Suivant</Button>
          ) : (
            <Link href={"/"}>
              <a>
                <Button>Lancer</Button>
              </a>
            </Link>
          )}
        </GridItem>
      </Grid>
    </Container>
  );
};

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 10vh 1fr 15vh;
  grid-template-areas:
    "header"
    "subtitle"
    "slider"
    "button";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  padding: 0 5rem;
`;

const Bullets = styled.div`
  display: flex;
  gap: 2rem;
`;

const Bullet = styled.div`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 1rem;
  ${(props) => {
    if (props.active) {
      return css`
        background-color: ${props.theme.primary};
      `;
    } else {
      return css`
        background-color: ${props.theme.primaryHover};
      `;
    }
  }}
`;

export default Tutorial;
