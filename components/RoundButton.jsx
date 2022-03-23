import styled from "@emotion/styled";

export default function RoundButton(props) {
    return (
        <Btn size={props.size}>
            {props.layout === "cross" && (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2175 3L3 24.2175M24.2175 24.2175L3 3" stroke="#4087C2" strokeWidth="7" />
                </svg>
            )}

            {props.layout === "check" && (
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.0075 0L10.1726 15.835L5.03691 10.6993L0 15.7362L5.13566 20.8719L10.2055 25.9417L15.2424 20.9048L31.0773 5.06985L26.0075 0Z"
                        fill="#6AA8DA"
                    />
                </svg>
            )}

            {props.layout === "emoji" && props.children}
        </Btn>
    );
}

const Btn = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.size === "small" ? "3rem" : "4rem")};
    height: ${(props) => (props.size === "small" ? "3rem" : "4rem")};
    background: ${({ theme }) => theme.baseColor};
    border-radius: 4rem;
    transition: transform ${({ theme }) => theme.transition};

    &:hover {
        transform: scale(1.1);
    }

    ${props => props.layout === "check" && css`
        svg {
            margin-left: 2px;
        }
    `}
`;
