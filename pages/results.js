import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Container } from "../shared/styles";

import { useQuestionContext } from "../lib/questionContext";

import Navbar from "../components/Navbar";
import CardResult from "../components/CardResult";

const Results = () => {
  const { formations } = useQuestionContext();
  const [formationsList, setFormationsList] = useState([]);

  useEffect(() => {
    if (!formations) return;
    const list = [...formations];
    list.sort((a, b) => b.score - a.score);
    list.length = 10;
    setFormationsList(list);
  }, [formations]);

  return (
    <Container>
      <Grid>
        <GridItem area="header">
          <HeaderContainer>
            <HeaderH1>Mes Formations</HeaderH1>
            <HeaderP>
              Voici les formations te correspondant selon tes réponses aux
              cartes.
            </HeaderP>
          </HeaderContainer>
        </GridItem>
        <GridItem area="results">
          {formationsList?.length > 0 && (
            <CardsList>
              {formationsList.map((formation, index) => {
                // const percentage = Math.round((parseInt(formation.score) / questionCounter) * 100) || 0;

                return (
                  <>
                    <CardResult
                      key={formation.formation_id}
                      score={formation.score || 0}
                      type={formation.type}
                      title={formation.label}
                      percentage={0}
                    />
                    {index < formationsList.length - 1 && (
                      <Separator key={index} />
                    )}
                  </>
                );
              })}
            </CardsList>
          )}
        </GridItem>
        <GridItem area="navbar">
          <Navbar />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Results;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 1fr 15vh;
  grid-template-areas:
    "header"
    "results"
    "navbar";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 3rem;
  height: 100%;
`;

const HeaderP = styled.p`
  text-align: left;
  font-weight: 700;
`;

const HeaderH1 = styled.h1`
  text-align: left;
`;

const CardsList = styled.ul`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
  height: 100px;
  min-height: 100%;
  max-height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Separator = styled.hr`
  height: 2px;
  box-shadow: none;
  border-color: #dddddd;
  width: 100%;
`;
