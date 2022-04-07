import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function RoundButton(props) {
    return (
        <Btn title={props.title} onClick={() => props?.onClick?.()} size={props.size}>
            {props.layout === "cross" && (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2175 3L3 24.2175M24.2175 24.2175L3 3" stroke="#0C53A3" strokeWidth="7" />
                </svg>
            )}

            {props.layout === "check" && (
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.3039 0L10.469 15.835L5.3333 10.6993L0.296387 15.7362L5.43205 20.8719L10.5019 25.9417L15.5388 20.9048L31.3737 5.06985L26.3039 0Z"
                        fill="#0C53A3"
                    />
                </svg>
            )}

            {props.layout === "arrow" && (
                <svg width="16" height="16" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.23802 2.20142C0.836978 1.81251 0.836978 1.18221 1.22466 0.779896C1.42518 0.578737 1.67917 0.484863 1.94654 0.484863C2.20053 0.484863 2.45453 0.578737 2.64168 0.779896L7.30719 5.43337C7.49434 5.62112 7.60129 5.87592 7.60129 6.14413C7.60129 6.41235 7.49434 6.66715 7.30719 6.8549L2.64168 11.5084C2.25401 11.9107 1.6257 11.9107 1.22466 11.5084C0.836978 11.1195 0.836978 10.4758 1.23802 10.0869L5.18164 6.14413L1.23802 2.20142Z"
                        fill="#0C53A3"
                    />
                </svg>
            )}

            {props.layout === "text" && props.children}
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
    background: ${({ theme }) => theme.baseColor};
    border-radius: 4rem;
    transition: transform ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    font-weight: 600;
    box-shadow: ${({ theme }) => theme.boxShadow};

    ${(props) => {
        if (props.size === "small") {
            return css`
                padding: 1rem 1.5rem;
            `;
        } else if (props.size === "tiny") {
            return css`
                padding: 0.5rem 0.5rem;
            `;
        } else {
            return css`
                width: 4rem;
                height: 4rem;
            `;
        }
    }}

    &:hover {
        transform: scale(1.1);
    }

    ${(props) =>
        props.layout === "check" &&
        css`
            svg {
                margin-left: 2px;
            }
        `}
`;
