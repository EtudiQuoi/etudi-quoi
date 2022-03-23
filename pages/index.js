import styled from "@emotion/styled";
import { Container } from "../shared/styles";

import Navbar from "../components/Navbar";
import Range from "../components/Range";
import RoundButton from "../components/RoundButton";
import Logo from "../components/Logo";
import { Stack } from "../components/Stack";

const Home = () => (
    <Container>
        <Grid>
            <GridItem area="header">
                <Logo />
            </GridItem>
            <GridItem area="card">
                <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
                    <Item data-value="team" whileTap={{ scale: 1.15 }}>
                        <span>Apprécies tu le travail d’équipe ?</span>
                    </Item>
                    <Item data-value="curiosity" whileTap={{ scale: 1.15 }}>
                        <span>Es-tu curieux ?</span>
                    </Item>
                    <Item data-value="informatic" whileTap={{ scale: 1.15 }}>
                        <span>L'informatique est un domaine qui t'intéresse ?</span>
                    </Item>
                </Wrapper>
            </GridItem>
            <GridItem area="range">
                <Range value="2250" max="3000" />
            </GridItem>
            <GridItem area="buttons">
                <ButtonContainer>
                    <RoundButton layout="cross" />
                    <RoundButton layout="text" size="small">
                        Passer
                    </RoundButton>
                    <RoundButton onClick layout="check" />
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

const Wrapper = styled(Stack)`
    background: transparent;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 250px;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.baseColor};
    background: ${({ theme }) => theme.primaryGradient};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 8px;
    transform: ${() => {
        let rotation = Math.random() * (5 - -5) + -5;
        return `rotate(${rotation}deg)`;
    }};
`;
