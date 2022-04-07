import { motion } from "framer-motion";
import styled from "@emotion/styled";

import CardIcon from "../icons/CardIcon";
import CardResult from "../components/CardResult";
import SchoolCard from "../components/SchoolCard";

const Slide1 = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <CardIcon type="tutorial" />
    </motion.div>
  );
};

const Slide2 = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
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
    </motion.div>
  );
};

const Slide3 = () => {
  return (
    <Container
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <h3>Métiers du Multimédia et de l'Internet</h3>
      <SchoolsList>
        <SchoolCard>IUT Bordeaux</SchoolCard>
        <SchoolCard>IUT Laval</SchoolCard>
        <SchoolCard>IUT Toulon</SchoolCard>
        <SchoolCard>IUT Tours</SchoolCard>
      </SchoolsList>
    </Container>
  );
};

const TutoSlide = ({ slideNumber }) => {
  return (
    <>
      {slideNumber === 1 && <Slide1 />}
      {slideNumber === 2 && <Slide2 />}
      {slideNumber === 3 && <Slide3 />}
    </>
  );
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
