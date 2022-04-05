import { ThemeContext } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function Logo(props) {
    return (
        <H1 {...props}>
            <span>Etudi'</span>quoi
        </H1>
    );
}

const H1 = styled.h1`
    font-weight: bold;
    color: ${({ theme }) => theme.primaryHover};

    span {
        color: ${({ theme }) => theme.primary};
    }

    ${(props) => {
        if (props.size === "big") {
            return css`
                font-size: 4.5rem;
            `;
        } else {
            return css`    
                font-size: 3rem;
            `;
        }
    }}
`;
