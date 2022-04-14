import Link from "next/link";
import styled from "@emotion/styled";

const LinkTo = ({ className, link, children }) => {
  if (className === "outlink") {
    return (
      <A className={className} href={link} target="_blank">
        {children}
      </A>
    );
  }
  return (
    <Link href={link}>
      <A className={className}>{children}</A>
    </Link>
  );
};

const A = styled.a`
  font-family: "Epilogue", sans-serif;
  font-size: 0.875rem;
  padding: 0.625rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0px 8px 14px -13px rgba(77, 101, 169, 0.3);
  transition: transform ${({ theme }) => theme.transition};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  // &:hover {
  //   transform: scale(1.1);
  // }

  &.outlink {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    gap: 0.313rem;
  }

  &.primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.baseColor};
  }

  &.secondary {
    background: ${({ theme }) => theme.baseColor};
    color: ${({ theme }) => theme.primary};
  }

  &.big {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

export default LinkTo;
