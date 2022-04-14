import styled from "@emotion/styled";

import { useVoteFunctionContext } from "../lib/voteFunctionContext";

import RoundButton from "./RoundButton";

export default function ButtonNav(props) {
  const { voteFunction } = useVoteFunctionContext();

  return (
    <ButtonContainer>
      <RoundButton
        title="Non"
        onClick={() => props.active && voteFunction && voteFunction("left")}
        layout="cross"
      />
      <RoundButton layout="text" size="small">
        Ne sais pas
      </RoundButton>
      <RoundButton
        title="Oui"
        onClick={() => props.active && voteFunction && voteFunction("right")}
        layout="check"
      />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
<<<<<<< HEAD
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
=======
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.344rem;
>>>>>>> 60b58d231f3f834d72ce124864c9e786819a2f86
`;
