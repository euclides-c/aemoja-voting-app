import React, { useState } from 'react';
import { Radio } from 'antd';
import CandidateCard from './CandidateCard';
import VoteSubmissionButton from './VoteSubmissionButton';

const VotingCards = () => {
	const [value, setValue] = useState(1);

	const onChange = (e: any) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};

	return (
		<>
			<Radio.Group onChange={onChange} value={value}>
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
			<VoteSubmissionButton />
		</>
	);
};

export default VotingCards;
