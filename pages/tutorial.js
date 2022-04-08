import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";

import { Container } from "../shared/styles";
import Logo from "../components/Logo";
import TutorialContent from "../components/TutorialContent";

const Tutorial = () => {
  return (
    <Container>
      <Grid>
        <GridItem area="header">
          <Logo />
        </GridItem>
        <AnimatePresence exitBeforeEnter>
          <TutorialContent />
        </AnimatePresence>
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

export default Tutorial;
