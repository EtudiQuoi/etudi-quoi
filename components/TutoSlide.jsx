import styled from "@emotion/styled";

import CardIcon from "../icons/CardIcon";
import CardResult from "../components/CardResult";
import SchoolCard from "../components/SchoolCard";

const TutoSlide = ({ slideNumber }) => {
  if (slideNumber === 1) {
    return <CardIcon type="tutorial" />;
  } else if (slideNumber === 2) {
    return (
      <>
        <CardsList>
          <CardResult
            type="Bachelor Universitaire de Technologie"
            title="Métiers du Multimédia et de l’internet"
            percentage="88"
          />
          <Separator />
          <CardResult
            type="Bachelor Universitaire de Technologie"
            title="Communication des organisations"
            percentage="76"
          />
        </CardsList>
        <H3>
          Tes formations apparaissent en fonction de tes centres d’intêrets
        </H3>
      </>
    );
  } else {
    return (
      <Container>
        <h3>Métiers du Multimédia et de l'Internet</h3>
        <SchoolsList>
          <SchoolCard>IUT Bordeaux</SchoolCard>
          <SchoolCard>IUT Laval</SchoolCard>
          <SchoolCard>IUT Toulon</SchoolCard>
          <SchoolCard>IUT Tours</SchoolCard>
        </SchoolsList>
      </Container>
    );
  }
};

const CardsList = styled.ul`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Separator = styled.hr`
  height: 2px;
  box-shadow: none;
  border-color: #dddddd;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const SchoolsList = styled.ul`
  padding: 0 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H3 = styled.h3`
  padding: 0 3rem;
`;

export default TutoSlide;
