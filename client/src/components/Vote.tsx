import { useEffect, useState } from "react";
import API from "../Api";

import VotingCards from "./Cards/VotingCards";
import VoteSubmissionButton from "./VoteSubmissionButton";
import { useHistory } from "react-router";

const Vote = () => {
  const history = useHistory();
  const [chosenCandidate, setChosenCandidate] = useState<string>("");
  const [votingToken, setVotingToken] = useState<string>("");
  const [votersEmails, setVotersEmail] = useState<string>("");

  useEffect(() => {
    const payload = {
      candidateName: chosenCandidate,
      votersEmail: votersEmails,
      token: votingToken,
    };

    // check if values a set on the payload before submitting

    if (chosenCandidate !== "" && votingToken !== "" && votersEmails !== "") {
      console.log(payload);
      API.post("/vote", payload)
        .then((response) => {
          if (response.status === 200) {
            history.push({
              pathname: "/notification",
              state: {
                status: "success",
                title: "Successo",
                subTitle: "O seu voto foi recebido",
              },
            });
          }
        })
        .catch((error) => {
          history.push({
            pathname: "/notification",
            state: {
              status: "error",
              title: "Ocorreu um erro",
              subTitle: "Ocorreu um erro durante o voto",
            },
          });
        });
    }
  }, [chosenCandidate, history, votersEmails, votingToken]);

  return (
    <div>
      <VotingCards
        chosenCandidate={chosenCandidate}
        setChosenCandidate={setChosenCandidate}
      />
      <VoteSubmissionButton
        setVotingToken={setVotingToken}
        setVotersEmail={setVotersEmail}
      />
    </div>
  );
};

export default Vote;
