import { useEffect, useState, useMemo } from "react";
import styled from "@emotion/styled";
import { Container } from "../shared/styles";

import VoteWrapper from "../lib/voteFunctionContext";
import { useQuestionContext } from "../lib/questionContext";

import Navbar from "../components/Navbar";
import Range from "../components/Range";
import Logo from "../components/Logo";
import { Stack } from "../components/Stack";
import ButtonNav from "../components/ButtonNav";

const Home = () => {
    const { questions, setQuestions, formations, nextQuestion, questionCounter } = useQuestionContext();
    const [questionList, setQuestionList] = useState();

    useEffect(() => {
        if (!questions) return;
        const temp = [...questions];
        temp?.splice(-questionCounter, questionCounter);
        setQuestionList(temp);
    }, [questions]);

    return (
        <Container>
            <VoteWrapper>
                <Grid>
                    <GridItem area="header">
                        <Logo />
                    </GridItem>
                    <GridItem area="card">
                        {questionList?.length > 0 && (
                            <Wrapper onVote={(item, vote) => nextQuestion(vote)}>
                                {questionList.map((element) => (
                                    <Item key={element.id} whileTap={{ scale: 1.15 }}>
                                        <span>{element.question}</span>
                                    </Item>
                                ))}
                            </Wrapper>
                        )}
                    </GridItem>
                    <GridItem area="range">
                        <Range value={formations?.length || 0} />
                    </GridItem>
                    <GridItem area="buttons">
                        <ButtonNav />
                    </GridItem>
                    <GridItem area="navbar">
                        <Navbar />
                    </GridItem>
                </Grid>
            </VoteWrapper>
        </Container>
    );
};

export default Home;

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
