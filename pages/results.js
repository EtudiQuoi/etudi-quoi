import styled from "@emotion/styled";
import { Container } from "../shared/styles";

import VoteWrapper from "../lib/context";

import Navbar from "../components/Navbar";
import CardResult from "../components/CardResult";

const Results = () => (
    <Container>
        <VoteWrapper>
            <Grid>
                <GridItem area="header">
                    <h1>Mes Formations</h1>
                </GridItem>
                <GridItem area="results">
                    <CardsList>
                        <CardResult />
                        <Separator />
                        <CardResult />
                        <CardResult />
                        <CardResult />
                        <CardResult />
                        <CardResult />
                        <CardResult />
                        <CardResult />
                    </CardsList>
                </GridItem>
                <GridItem area="navbar">
                    <Navbar />
                </GridItem>
            </Grid>
        </VoteWrapper>
    </Container>
);

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

const CardsList = styled.ul`
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
    height: 500px;
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
