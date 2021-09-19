import { useEffect, useState } from 'react';
import API from '../Api';

import VotingCards from '../components/VotingCards';
import VoteSubmissionButton from '../components/VoteSubmissionButton';
import { useHistory } from 'react-router';

const Vote = () => {
	const history = useHistory();
	const [chosenCandidate, setChosenCandidate] = useState<string>('');
	const [votingToken, setVotingToken] = useState<string>(' ');
	const [votersEmails, setVotersEmail] = useState<string>(' ');
	// The states will be updated by the components on the return. pass the setters as props

	console.log('Candidate chosen:', chosenCandidate);
	console.log('Vote Token', votingToken);

	useEffect(() => {
		const payload = {
			candidateName: chosenCandidate,
			votersEmail: votersEmails,
			token: votingToken,
		};

		// check if values a set on the payload before submitting

		if (
			chosenCandidate !== ' ' &&
			votingToken !== ' ' &&
			votersEmails !== ' '
		) {
			console.log(payload);
			API.post('/vote', payload)
				.then((response) => {
					if (response.status === 200) {
						history.push('/votesuccess');
					}
				})
				.catch((error) => {
					history.push('/voteerror');
				});
		}
	}, [chosenCandidate, votersEmails, votingToken]);

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
