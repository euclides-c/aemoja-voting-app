import React, { useState } from 'react';
import { Radio, RadioChangeEvent, Row, Col } from 'antd';
import CandidateCard from './CandidateCard';

interface Props {
	chosenCandidate: string;
	setChosenCandidate: (t: string) => void;
}

interface candidates {
	name: string;
	imageURL: string;
}

// make a call to the backend to populate the cards

const candidateInit = [
	{
		name: 'Paulo Jose',
		imageURL:
			'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	},
	{
		name: 'Nelson',
		imageURL:
			'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	},
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
		<>
			<Row gutter={4}>
				<Col span={8}>
					{candidateList !== undefined ? (
						candidateList.map((candidate: candidates, index: number) => {
							return (
								<Radio.Group onChange={onChange} value={chosenCandidate}>
									<Radio value={candidate.name} key={index}>
										<CandidateCard
											key={index}
											name={candidate.name}
											imageURL={candidate.imageURL}
										/>
									</Radio>
								</Radio.Group>
							);
						})
					) : (
						<div>No Candidates </div>
					)}
				</Col>
			</Row>
		</>
	);
};

export default VotingCards;
