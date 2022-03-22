import styled from "@emotion/styled";

export default function Range(props) {
    const percent = (props.value / props.max) * 100;

    return (
        <RangeContainer>
            <Label>
                {props.value}/{props.max} Propositions
            </Label>
            <RangeBox percent={percent} />
        </RangeContainer>
    );
}

const RangeContainer = styled.div`
    margin-top: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const Label = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
`;

const RangeBox = styled.div`
    position: relative;
    height: 8px;
    width: 60%;
    border-radius: 1rem;
    background: ${({ theme }) => theme.primaryHover};

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${(props) => props.percent <= 100 ? props.percent : 100}%;
        border-radius: 1rem;
        background: ${({ theme }) => theme.primary};
    }
`;
