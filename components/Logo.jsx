import { ThemeContext } from "@emotion/react";
import styled from "@emotion/styled";

export default function Logo() {
    return (
        <H1>
            <span>Etudi'</span>quoi
        </H1>
    );
}

const H1 = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryHover};

    span {
        color: ${({ theme }) => theme.primary};
    }
`;
