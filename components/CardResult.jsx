import styled from "@emotion/styled";

import LinkTo from "../components/LinkTo";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";

const CardResult = ({ type, title, percentage, rncp, className }) => {
  const rncpNumber = rncp?.slice(4);
  if (className === "tutorial") {
    return (
      <ListItem className={className}>
        <Infos>
          <FormationType>{type}</FormationType>
          <FormationTitle>{title}</FormationTitle>
        </Infos>
      </ListItem>
    );
  } else if (className === "tutorial-grey") {
    return (
      <ListItem className={className}>
        <Infos>
          <GreyBox className="grey-box-top" />
          <Container>
            <GreyBox className="grey-box-left" />
            <GreyBox className="grey-box-middle" />
            <GreyBox className="grey-box-right" />
          </Container>
        </Infos>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <Infos>
        <FormationType>{type}</FormationType>
        <FormationTitle>{title}</FormationTitle>
      </Infos>
      <Buttons>
        <LinkTo
          link={`https://www.francecompetences.fr/recherche/rncp/${rncpNumber}/`}
          className="outlink"
        >
          En savoir plus
          <ArrowLinkIcon />
        </LinkTo>
        <LinkTo link="/ecoles" className="secondary">
          Établissements
        </LinkTo>
      </Buttons>
      {/* <BottomInfo>
                <Label htmlFor="pertinence">Pertinence</Label>
                <ProgressBar id="pertinence" value={percentage} max="100">
                    {percentage}%
                </ProgressBar>
                <p>{percentage}%</p>
                <RoundButton size="tiny" layout="arrow" />
            </BottomInfo> */}
    </ListItem>
  );
};

export default CardResult;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  color: ${({ theme }) => theme.darkColor};

  &.tutorial-grey {
    .grey-box-top {
      height: 1rem;
      width: 12.5rem;
    }
    .grey-box-left {
      height: 1rem;
      width: 25%;
    }
    .grey-box-middle {
      height: 0.313rem;
      width: 50%;
    }
    .grey-box-right {
      height: 1rem;
      width: 15%;
    }
  }
`;

const GreyBox = styled.div`
  background-color: #bbd8f3;
  border-radius: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const FormationType = styled.p`
  text-align: left;
  font-size: 0.75rem;
`;

const FormationTitle = styled.h2`
  line-height: 120%;
  font-size: 1.25rem;
  text-align: left;
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  text-transform: uppercase;
`;

const ProgressBar = styled.progress`
  height: 0.3rem;
  width: 13rem;
  -webkit-appearance: none;
  border-radius: 10px;
  overflow: hidden;
  ::-webkit-progress-value {
    background-color: #083262;
  }

  ::-webkit-progress-bar {
    background-color: #84b9eb;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
