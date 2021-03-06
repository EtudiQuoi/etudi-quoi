import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import TutoSlide from "../components/TutoSlide";
import Button from "../components/Button";
import LinkTo from "./LinkTo";

const TutorialContent = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState("right");

  const changeSlideNumber = (number) => {
    setSlideNumber(slideNumber + number);
  };

  const onClickNextButton = () => {
    setDirection("right");
    changeSlideNumber(1);
  };

  const onClickBullet = (bulletNumber) => {
    if (slideNumber < bulletNumber) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setSlideNumber(bulletNumber);
  };

  const dragChangeSlide = () => {
    if (
      touchStart > touchEnd &&
      slideNumber < 4 &&
      touchStart !== 0 &&
      touchEnd !== 0
    ) {
      setDirection("right");
      changeSlideNumber(1);
      setTouchEnd(0);
      setTouchStart(0);
      return;
    } else if (
      touchStart < touchEnd &&
      slideNumber > 1 &&
      touchStart !== 0 &&
      touchEnd !== 0
    ) {
      setDirection("left");
      changeSlideNumber(-1);
      setTouchEnd(0);
      setTouchStart(0);
      return;
    }
    return;
  };

  useEffect(() => {
    dragChangeSlide();
  }, [touchEnd]);

  return (
    <>
      <GridItem area="subtitle">
        <H2>
          {slideNumber === 1
            ? "Swipe les propositions qui te caractérisent"
            : slideNumber === 2
            ? "Tu peux swiper :"
            : slideNumber === 3
            ? "Découvre les formations qui te correspondent"
            : "Trouve les établissements qui proposent la formation"}
        </H2>
      </GridItem>
      <GridItem
        area="slider"
        onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={(e) => setTouchEnd(e.changedTouches[0].clientX)}
      >
        <TutoSlide slideNumber={slideNumber} direction={direction} />
      </GridItem>
      <GridItem area="button">
        <Bullets>
          <Bullet active={slideNumber === 1} onClick={() => onClickBullet(1)} />
          <Bullet active={slideNumber === 2} onClick={() => onClickBullet(2)} />
          <Bullet active={slideNumber === 3} onClick={() => onClickBullet(3)} />
          <Bullet active={slideNumber === 4} onClick={() => onClickBullet(4)} />
        </Bullets>
        {slideNumber < 4 ? (
          <Button onClick={onClickNextButton}>Suivant</Button>
        ) : (
          <LinkTo link="/questions" className="primary big">
            Lancer
          </LinkTo>
        )}
      </GridItem>
    </>
  );
};

const H2 = styled.h2`
  font-size: 1.5rem;
  padding: 0 2rem;
  color: ${({ theme }) => theme.darkColor};
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  place-items: center;
`;

const Bullets = styled.div`
  display: flex;
  gap: 2rem;
`;

const Bullet = styled.div`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 1rem;
  cursor: pointer;
  ${(props) => {
    if (props.active) {
      return css`
        background-color: ${props.theme.primary};
      `;
    } else {
      return css`
        background-color: ${props.theme.primaryHover};
      `;
    }
  }}
`;

export default TutorialContent;
