import React, { useState } from 'react';
import VotingCards from '../components/VotingCards';
import VoteSubmissionButton from '../components/VoteSubmissionButton';

const Vote = () => {
	const [chosenCandidate, setChosenCandidate] = useState<string>('');
	const [votingToken, setVotingToken] = useState<string>();

	// The states will be updated by the components on the return. pass the setters as props

	console.log('Candidate chosen:', chosenCandidate);
	console.log('Vote Token', votingToken);

	return (
		<div>
			<VotingCards
				chosenCandidate={chosenCandidate}
				setChosenCandidate={setChosenCandidate}
			/>
			<VoteSubmissionButton setVotingToken={setVotingToken} />
		</div>
	);
};

export default Vote;
