import { ThemeContext } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Logo(props) {
    return (
        <H1 {...props}>
            <Link href="/">
                <a title="Etudi'Quoi">
                    <span>Etudi'</span>quoi
                </a>
            </Link>
        </H1>
    );
}

const H1 = styled.h1`
    font-weight: bold;
    color: ${({ theme }) => theme.primaryHover};

    a {
        color: inherit;
        text-decoration: none;
    }

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
