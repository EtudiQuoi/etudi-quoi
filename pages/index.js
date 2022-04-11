import styled from "@emotion/styled";
import { Container } from "../shared/styles";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Link from "next/link";

const Menu = () => {
  return (
    <Container>
      <Grid>
        <GridItem area="title" gap="3">
          <Logo size="big" />
          <H2>Trouve la formation qui matche tes envies.</H2>
        </GridItem>
        <GridItem area="buttons" gap="2">
          <Link href="/questions">
            <a>
              <Button>C'est parti</Button>
            </a>
          </Link>
          <Link href="/tutorial">
            <a>
              <Button>Comment ça marche ?</Button>
            </a>
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Menu;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30vh 1fr 30vh;
  grid-template-areas:
    "void"
    "title"
    "buttons";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap}rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  padding: 0 3rem;
`;
