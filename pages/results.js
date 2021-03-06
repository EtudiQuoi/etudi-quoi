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
    // const list = formations.map((formation) => {
    //     return { score: formation.score || 0, name: formation.INTITULE, code: formation.ABREGE?.LIBELLE };
    // });
    // list.sort((a, b) => b.score - a.score);
    const list = [...formations];
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
        <GridItem className="result" area="results">
          {formationsList?.length > 0 && (
            <CardsList>
              {formationsList.map((formation, index) => {
                // const percentage = Math.round((parseInt(formation.score) / questionCounter) * 100) || 0;

                return (
                  <>
                    <CardResult
                      key={formation.formation_id}
                      id={formation.formation_id}
                      type={formation.type}
                      title={formation.label}
                      rncp={formation.rncp}
                      percentage={0}
                    />
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
  grid-template-rows: 20vh 1fr 15vh;
  grid-template-areas:
    "header"
    "results"
    "navbar";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;

  &.result {
    overflow-x: hidden;
    overflow: scroll;
    min-height: 100%;
    max-height: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.313rem;
  padding: 0 1.875rem;
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
  padding: 1rem 1.875rem;
`;

const Separator = styled.hr`
  height: 2px;
  box-shadow: none;
  border-color: #dddddd;
  width: 100%;
`;
