import React, { useEffect, useState } from 'react';
import { Radio, RadioChangeEvent} from 'antd';
import CandidateCard from './CandidateCard';
import styled from 'styled-components';
import API from '../../Api';

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
	foto: string;
}


const VotingCards: React.FC<Props> = ({
	chosenCandidate,
	setChosenCandidate,
}) => {
	const [candidateList, setCandidateList] =
		useState<candidates[]>([]);

	const onChange = (e: RadioChangeEvent) => {
		setChosenCandidate(e.target.value);
	};
	useEffect(() => {
		// make a get candidates call for the backend 
		// use the result to set candidateList

		API.get('/voters/candidates')
			.then((response) => {
				if (response.status === 200) {
					setCandidateList(response.data);
				}
			})
			.catch((error) => {
				console.log('Something went wrong when calling candidates');
			});
		return () => {
	
		}
	}, [])

	return (
		<>
			<StyledCards >
				{candidateList !== undefined ? (
					candidateList.map((candidate: candidates, index: number) => {
						return (
							<Radio.Group onChange={onChange} value={chosenCandidate} key={index}>
								<Radio value={candidate.name} key={index}>
									<CandidateCard
										key={index}
										name={candidate.name}
										foto={candidate.foto}
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
