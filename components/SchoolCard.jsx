import styled from "@emotion/styled";

const SchoolCard = (props) => {
  return (
    <ListItem>
      <P>{props.children}</P>
    </ListItem>
  );
};

const ListItem = styled.li`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  display: flex;
  list-style: none;
  align-items: center;
  padding: 1.5rem;
`;

const P = styled.p`
  height: 100%;
  font-weight: 900;
  color: ${({ theme }) => theme.primary};
`;

export default SchoolCard;
