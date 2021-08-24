import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import CandidateCard from './CandidateCard';

interface Props {
	chosenCandidate: string;
	setChosenCandidate: (t: string) => void;
}

interface candidates {
	name: string;
}

// make a call to the backend to populate the cards

const candidateInit = [
	{ name: 'Delio' },
	{ name: 'Chelsea' },
	{ name: 'Sultane' },
	{ name: 'Nelson' },
];

const VotingCards: React.FC<Props> = ({
	chosenCandidate,
	setChosenCandidate,
}) => {
	const [candidateList, setCandidateList] =
		useState<candidates[]>(candidateInit);

	// make a database call and use setCandidate List to get real candidates

	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);

		setChosenCandidate(e.target.value);
	};

	return (
		<Radio.Group onChange={onChange} value={chosenCandidate}>
			{/* use maps to populate cards, value should be got from props */}
			{candidateList !== undefined ? (
				candidateList.map((candidate: candidates, index: number) => {
					return (
						<>
							<Radio value={candidate.name} key={index}>
								<CandidateCard name={candidate.name} />
							</Radio>
						</>
					);
				})
			) : (
				<div>No Candidates </div>
			)}
			;
		</Radio.Group>
	);
};

export default VotingCards;
