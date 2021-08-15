import React, { useState } from 'react';
import { Radio } from 'antd';
import CandidateCard from './CandidateCard';

const VotingCards = () => {
	const [value, setValue] = useState(1);

	const onChange = (e: any) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};

	return (
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
			<Radio value={'The Other'}>
				<CandidateCard />
			</Radio>
		</Radio.Group>
	);
};

export default VotingCards;
