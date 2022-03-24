import styled from "@emotion/styled";

export default function Range(props) {
    const percent = (props.value / props.max) * 100;

    return (
        <RangeContainer>
            {props.value} Propositions restantes
        </RangeContainer>
    );
}

const RangeContainer = styled.span`
    font-weight: bold;
    color: #27345A;
`;
