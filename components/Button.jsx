import styled from "@emotion/styled";

export default function Button({ onClick, children }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

const Btn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "Epilogue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.baseColor};
  box-shadow: 0px 8px 14px -13px rgba(77, 101, 169, 0.3);
  transition: transform ${({ theme }) => theme.transition};

  &:hover {
    transform: scale(1.1);
  }
`;
