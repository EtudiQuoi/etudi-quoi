import styled from "@emotion/styled";
import Link from "next/link";

import Button from "./Button";

const CardResult = ({ type, title, percentage, rncp, disabled }) => {
  const rncpNumber = rncp.slice(4);
  return (
    <ListItem>
      <FormationType>{type}</FormationType>
      <FormationTitle>{title}</FormationTitle>
      <Buttons>
        <Link
          href={`https://www.francecompetences.fr/recherche/rncp/${rncpNumber}/`}
        >
          <a target="_blank">
            <Button size="small" type="secondary" outlink>
              En savoir plus
            </Button>
          </a>
        </Link>
        {disabled ? (
          <Button size="small">Établissements</Button>
        ) : (
          <Link href="/ecoles">
            <a>
              <Button size="small">Établissements</Button>
            </a>
          </Link>
        )}
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
  gap: 0.3rem;
  color: ${({ theme }) => theme.darkColor};
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
