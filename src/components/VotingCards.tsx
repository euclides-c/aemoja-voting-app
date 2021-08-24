import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import CandidateCard from './CandidateCard';

interface Props {
	chosenCandidate: string;
	setChosenCandidate: (t: string) => void;
}

const VotingCards: React.FC<Props> = ({
	chosenCandidate,
	setChosenCandidate,
}) => {
	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);

		setChosenCandidate(e.target.value);
	};

	return (
		<>
			<Radio.Group onChange={onChange} value={chosenCandidate}>
				<Radio value={'Delio'}>
					<CandidateCard />
				</Radio>
				<Radio value={'Elina'}>
					<CandidateCard />
				</Radio>
				<Radio value={'TJ'}>
					<CandidateCard />
				</Radio>
			</Radio.Group>
		</>
	);
};

export default VotingCards;
