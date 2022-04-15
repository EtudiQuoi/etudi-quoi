import { useEffect, useState, useMemo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container } from "../shared/styles";

import VoteWrapper from "../lib/voteFunctionContext";
import { useQuestionContext } from "../lib/questionContext";

//Icon settings
import Setting from "../components/Setting";
import { useRouter } from "next/router";
import SettingIcon from "../icons/SettingIcon";

import Navbar from "../components/Navbar";
import Range from "../components/Range";
import Logo from "../components/Logo";
import { Stack } from "../components/Stack";
import ButtonNav from "../components/ButtonNav";

const Home = () => {
    const { questions, formations, nextQuestion, questionCounter } = useQuestionContext();
    const [questionList, setQuestionList] = useState();
    const [isOpenSetting, setIsOpenSetting] = useState(false);

    const openSetting = () => {
        setIsOpenSetting(true);
    };

    const getCategory = (element) => {
        switch (element.category) {
            case "interests":
                return "Centres d’intérêt";
            case "character":
                return "Caractère";
            case "skills":
                return "Compétences";
            default:
                return "Autre";
        }
    };

    useEffect(() => {
        if (!questions.length > 0) return;
        const temp = [...questions];
        temp?.splice(-questionCounter, questionCounter);
        setQuestionList(temp);
    }, [questions]);

    return (
        <>
            <Container>
                <VoteWrapper>
                    <Grid>
                        <GridItem area="header">
                            <HeaderBox>
                                <EmptyDiv />
                                <Logo />
                                <SettingIcon onClick={openSetting} />
                            </HeaderBox>
                        </GridItem>
                        <GridItem area="card">
                            {questionList?.length > 0 && (
                                <Wrapper
                                    onVote={(item, vote) => {
                                        nextQuestion(item.props.id, vote);
                                    }}
                                >
                                    {questionList.map((element) => (
                                        <Item
                                            key={element.question_id}
                                            id={element.question_id}
                                            category={element.category}
                                            whileTap={{ scale: 1.15 }}
                                        >
                                            <ItemCategory category={element.category}>
                                                {getCategory(element)}
                                            </ItemCategory>
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
                            <ButtonNav active={questionList?.length > 0} />
                        </GridItem>
                        <GridItem area="navbar">
                            <Navbar />
                        </GridItem>
                    </Grid>
                </VoteWrapper>
            </Container>
            {isOpenSetting && <Setting setIsOpenSetting={setIsOpenSetting} />}
        </>
    );
};

export default Home;

const EmptyDiv = styled.div`
    width: 30px;
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
const HeaderBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    align-items: center;
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
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 1fr 10%;
    place-items: center;
    width: calc(35vh * 0.8);
    height: 35vh;
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 8px;
    transform: ${() => {
        let rotation = Math.random() * (5 - -5) + -5;
        return `rotate(${rotation}deg)`;
    }};

    span:first-letter {
        text-transform: capitalize;
    }

    &:after {
        content: "";
        position: absolute;
        top: 1rem;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        border-radius: 0.5rem;
    }

    ${(props) => {
        switch (props.category) {
            case "interests":
                return css`
                    color: #0c53a3;
                    background: #ffffff;

                    &:after {
                        border: 4px solid #0c53a3;
                    }
                `;
            case "character":
                return css`
                    color: #ffffff;
                    background: linear-gradient(180deg, #84b9eb 0%, #63a3df 100%);

                    &:after {
                        border: 4px solid #ffffff;
                    }
                `;
            case "skills":
                return css`
                    color: #ffffff;
                    background: linear-gradient(180deg, #0c53a3 0%, #0c3e77 100%);

                    &:after {
                        border: 4px solid #ffffff;
                    }
                `;
            default:
                return css`
                    color: #0c53a3;
                    background: #ffffff;

                    &:after {
                        border: 4px solid #0c53a3;
                    }
                `;
        }
    }}
`;

const ItemCategory = styled.div`
    font-size: 0.75rem;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;

    ${(props) => {
        switch (props.category) {
            case "interests":
                return css`
                    color: #ffffff;
                    background: #0c53a3;
                `;
            case "character":
                return css`
                    color: #0c53a3;
                    background: #ffffff;
                `;
            case "skills":
                return css`
                    color: #0c53a3;
                    background: #ffffff;
                `;
            default:
                return css`
                    color: #ffffff;
                    background: #0c53a3;
                `;
        }
    }}
`;
