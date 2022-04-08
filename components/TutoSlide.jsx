import { motion } from "framer-motion";
import styled from "@emotion/styled";

import CardIcon from "../icons/CardIcon";
import CardResult from "../components/CardResult";
import SchoolCard from "../components/SchoolCard";

const ContainerAnimation = (props) => {
  if (props.direction === "right") {
    return (
      <Container
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -500, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        {...props}
      >
        {props.children}
      </Container>
    );
  } else {
    return (
      <Container
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        {...props}
      >
        {props.children}
      </Container>
    );
  }
};

const Slide1 = ({ direction }) => {
  return (
    <ContainerAnimation css={{ alignItems: "center" }} direction={direction}>
      <CardIcon type="tutorial" />
    </ContainerAnimation>
  );
};

const Slide2 = ({ direction }) => {
  return (
    <ContainerAnimation direction={direction}>
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
      <H3>Tes formations apparaissent en fonction de tes centres d’intêrets</H3>
    </ContainerAnimation>
  );
};

const Slide3 = ({ direction }) => {
  return (
    <ContainerAnimation direction={direction}>
      <h3>Métiers du Multimédia et de l'Internet</h3>
      <SchoolsList>
        <SchoolCard>IUT Bordeaux</SchoolCard>
        <SchoolCard>IUT Laval</SchoolCard>
        <SchoolCard>IUT Toulon</SchoolCard>
        <SchoolCard>IUT Tours</SchoolCard>
      </SchoolsList>
    </ContainerAnimation>
  );
};

const TutoSlide = ({ slideNumber, direction }) => {
  return (
    <>
      {slideNumber === 1 && <Slide1 direction={direction} />}
      {slideNumber === 2 && <Slide2 direction={direction} />}
      {slideNumber === 3 && <Slide3 direction={direction} />}
    </>
  );
};

const CardsList = styled.ul`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
`;

const Separator = styled.hr`
  height: 2px;
  box-shadow: none;
  border-color: #dddddd;
  width: 100%;
`;

const Container = styled(motion.div)`
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
