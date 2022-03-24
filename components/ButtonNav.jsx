import styled from "@emotion/styled";

import { useVoteFunctionContext } from "../lib/voteFunctionContext";

import RoundButton from "./RoundButton";

export default function ButtonNav() {
    const { voteFunction } = useVoteFunctionContext();

    return (
        <ButtonContainer>
            <RoundButton onClick={() => voteFunction && voteFunction("left")} layout="cross" />
            <RoundButton layout="text" size="small">
                Passer
            </RoundButton>
            <RoundButton onClick={() => voteFunction && voteFunction("right")} layout="check" />
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;