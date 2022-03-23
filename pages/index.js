import styled from "@emotion/styled";
import { Container } from "../shared/styles";

import Navbar from "../components/Navbar";
import Range from "../components/Range";
import RoundButton from "../components/RoundButton";
import Logo from "../components/Logo";

const Home = () => (
    <Container>
        <Grid>
            <GridItem area="header">
                <Logo />
            </GridItem>
            <GridItem area="card"></GridItem>
            <GridItem area="range">
                <Range value="2250" max="3000" />
            </GridItem>
            <GridItem area="buttons">
                <ButtonContainer>
                    <RoundButton layout="cross" />
                    <RoundButton layout="text" size="small">
                        Passer
                    </RoundButton>
                    <RoundButton layout="check" />
                </ButtonContainer>
            </GridItem>
            <GridItem area="navbar">
                <Navbar />
            </GridItem>
        </Grid>
    </Container>
);

export default Home;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15vh 1fr 10vh 10vh 15vh;
    grid-template-areas:
        "header"
        "card"
        "range"
        "buttons"
        "navbar";
`;

const GridItem = styled.div`
    grid-area: ${(props) => props.area};
    display: grid;
    place-items: center;
`;
