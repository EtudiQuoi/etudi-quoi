import styled from "@emotion/styled";
import Link from "next/link";

import { Container } from "../shared/styles";

import BackIcon from "../icons/BackIcon";
import Navbar from "../components/Navbar";
import SchoolCard from "../components/SchoolCard";

const Schools = (props) => {
  return (
    <Container>
      <Grid>
        <GridItem area="header">
          <HeaderContainer>
            <Link href="/results">
              <a>
                <BackIcon />
              </a>
            </Link>
            <Title>Proposition d'écoles</Title>
          </HeaderContainer>
        </GridItem>
        <GridItem area="school-title">
          <SchoolTitle>Métiers du Multimédia et de l'Internet</SchoolTitle>
        </GridItem>
        <GridItem area="schools">
          <SchoolsList>
            <SchoolCard>IUT Bordeaux</SchoolCard>
            <SchoolCard>IUT Toulouse</SchoolCard>
            <SchoolCard>IUT Laval</SchoolCard>
            <SchoolCard>IUT Toulon</SchoolCard>
            <SchoolCard>IUT Tours</SchoolCard>
            <SchoolCard>IUT Marseille</SchoolCard>
            <SchoolCard>IUT Tarbes</SchoolCard>
            <SchoolCard>IUT Paris</SchoolCard>
          </SchoolsList>
        </GridItem>
        <GridItem area="navbar">
          <Navbar />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Schools;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 5vh 1fr 15vh;
  grid-template-areas:
    "header"
    "school-title"
    "schools"
    "navbar";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const SchoolTitle = styled.h4`
  color: ${({ theme }) => theme.darkColor};
`;

const HeaderContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 100%;
  width: 100%;
`;

const SchoolsList = styled.ul`
  padding: 1rem 3rem;
  height: 100%;
  max-height: 300px;
  min-height: 100%;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
