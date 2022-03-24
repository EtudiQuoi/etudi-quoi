import RoundButton from "./RoundButton";
import styled from "@emotion/styled";

const CardResult = (props) => {
    return (
        <ListItem>
            <FormationType>Bachelor Universitaire de Technologie</FormationType>
            <FormationTitle>Métiers du Multimédia et de l’Internet</FormationTitle>
            <BottomInfo>
                <Label htmlFor="pertinence">Pertinence</Label>
                <ProgressBar id="pertinence" value="70" max="100">
                    70%
                </ProgressBar>
                <p>70%</p>
                <RoundButton size="tiny" layout="arrow" />
            </BottomInfo>
        </ListItem>
    );
};

export default CardResult;

const ListItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: ${({ theme }) => theme.darkColor};
`;

const FormationType = styled.p`
    text-align: left;
`;

const FormationTitle = styled.h2`
    line-height: 120%;
    text-align: left;
`;

const BottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.label`
    text-transform: uppercase;
`;

const ProgressBar = styled.progress`
    height: 0.3rem;
    width: 13rem;
    -webkit-appearance: none;
    border-radius: 10px;
    overflow: hidden;
    ::-webkit-progress-value {
        background-color: #083262;
    }

    ::-webkit-progress-bar {
        background-color: #84b9eb;
    }
`;
