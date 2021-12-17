import React from "react";
import { Image } from "antd";
import styled from "styled-components";

const StyledNumber = styled.div`
  font-size: 40px;
  padding-left: 96px;
`;

const StyledImageContainer = styled.div`
  margin-left: 64px;
`;

interface Props {
  candidateImageURL: string;
  votes: number;
  name: string;
}
const ResultCard: React.FC<Props> = ({ candidateImageURL, votes, name }) => {
  return (
    <StyledImageContainer>
      <Image width={256} src={candidateImageURL} alt={name} />
      <StyledNumber>{votes}</StyledNumber>
    </StyledImageContainer>
  );
};

export default ResultCard;
