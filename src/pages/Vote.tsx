import React, { useState } from 'react';
import VotingCards from '../components/VotingCards';
import VoteSubmissionButton from '../components/VoteSubmissionButton';
import { Result } from 'antd';

const Vote = () => {
	const [chosenCandidate, setChosenCandidate] = useState<string>('');
	const [votingToken, setVotingToken] = useState<string>();

	// The states will be updated by the components on the return. pass the setters as props

	console.log('Candidate chosen:', chosenCandidate);
	console.log('Vote Token', votingToken);

	const date = new Date();

	return date.getMonth() === 8 && date.getDay() === 20 ? (
		<div>
			<VotingCards
				chosenCandidate={chosenCandidate}
				setChosenCandidate={setChosenCandidate}
			/>
			<VoteSubmissionButton setVotingToken={setVotingToken} />
		</div>
	) : (
		<Result
			status='403'
			title='403'
			subTitle='Esta Página Estará Disponivel a 20 de Setembro.'
		/>
	);
};

export default Vote;
