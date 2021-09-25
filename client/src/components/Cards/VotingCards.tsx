import React, { useState } from 'react';
import { Radio, RadioChangeEvent, Row, Col } from 'antd';
import CandidateCard from './CandidateCard';
import styled from 'styled-components';

const StyledCards = styled.div`
	display: inline-flex;
	justify-content: center;
	margin-left: 360px;
	margin-top: 64px;
`;

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
		name: 'Edson Mavie',
		imageURL: 'https://***REMOVED***.s3.ap-northeast-1.amazonaws.com/mavie.jpg',
	},
	{
		name: 'João Papel',
		imageURL:
			'https://***REMOVED***.s3.ap-northeast-1.amazonaws.com/papel.jpeg',
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
		setChosenCandidate(e.target.value);
	};

	return (
		<>
			<StyledCards>
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
			</StyledCards>
		</>
	);
};

export default VotingCards;
