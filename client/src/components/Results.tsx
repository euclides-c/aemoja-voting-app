import { useEffect, useState } from "react";
import ResultCard from "./Cards/ResultCard";
import API from "../Api";
import styled from "styled-components";

interface results {
  name: string;
  votes: number;
  imageURL: string;
}

// fix this interface to conform with the candiate object retrieved from the API
interface candidate {
  name: string;
  foto: string;
}
const StyledResultCards = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-left: 360px;
  margin-top: 64px;
`;

const Results = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<results[]>([]);

  // make a api call and use setResults List to get real results
  useEffect(() => {
    API.get("/voters/candidates")
      .then((response) => {
        if (response.status === 200) {
          const candidates = response.data;
          console.log(candidates);

          candidates.forEach((candidate: candidate) => {
            console.log(`/result/${candidate.name}`);
            API.get(`/result/${candidate.name}`)
              .then((response) => {
                if (response.status === 200) {
                  setResult([...response.data]);
                }
              })
              .catch((error) => {
                console.log(
                  `Something went wrong when calling the result for ${candidate.name}`
                );
              });
          });
        }
      })
      .catch((error) => {
        console.log("could not fetch candidates result");
      });
  }, []);

  return (
    <StyledResultCards>
      {result.map((res: results, index: number) => {
        return (
          <ResultCard
            key={index}
            candidateImageURL={res.imageURL}
            name={res.name}
            votes={res.votes}
          />
        );
      })}
    </StyledResultCards>
  );
};

export default Results;
