import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import CardIcon from "../icons/CardIcon";
import MapIcon from "../icons/MapIcon";
import CardResult from "../components/CardResult";
import RoundButton from "../components/RoundButton";
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
    <ContainerAnimation css={{ alignItems: "center" }} direction={direction}>
      <TutoSwipeContainer>
        <Row>
          <RoundButton layout="cross" />
          <P>À gauche si tu ne te reconnais pas dans la question.</P>
        </Row>
        <Row>
          <RoundButton layout="check" />
          <P>À droite si la question te correspond.</P>
        </Row>
      </TutoSwipeContainer>
    </ContainerAnimation>
  );
};

const Slide3 = ({ direction }) => {
  return (
    <ContainerAnimation direction={direction}>
      <CardsList>
        <CardResult
          className="tutorial"
          type="Bachelor Universitaire de Technologie"
          title="Métiers du Multimédia et de l’internet"
        />
        <Separator />
        <CardResult className="tutorial-grey" />
        <Separator />
        <CardResult className="tutorial-grey" />
      </CardsList>
      <H3>Tes formations apparaissent en fonction de tes centres d’intêrets</H3>
    </ContainerAnimation>
  );
};

const Slide4 = ({ direction }) => {
  return (
    <ContainerAnimation direction={direction}>
      <MapIcon
        css={css`
          align-self: center;
        `}
      />
    </ContainerAnimation>
  );
};

const TutoSlide = ({ slideNumber, direction }) => {
  return (
    <>
      {slideNumber === 1 && <Slide1 direction={direction} />}
      {slideNumber === 2 && <Slide2 direction={direction} />}
      {slideNumber === 3 && <Slide3 direction={direction} />}
      {slideNumber === 4 && <Slide4 direction={direction} />}
    </>
  );
};

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Separator = styled.hr`
  height: 2px;
  box-shadow: none;
  border-color: #dddddd;
  width: 100%;
`;

const Container = styled(motion.div)`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  justify-content: space-around;
`;

const TutoSwipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const P = styled.p`
  text-align: left;
  font-size: 1.125rem;
`;

const SchoolsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
`;

export default TutoSlide;
