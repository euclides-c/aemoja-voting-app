import { useEffect, useState } from 'react';
import ResultCard from './Cards/ResultCard';
import API from '../Api';
import styled from 'styled-components';

interface results {
	name: string;
	votes: number;
	imageURL: string;
}

const StyledResultCards = styled.div`
	display: inline-flex;
	justify-content: center;
	margin-left: 360px;
	margin-top: 64px;
`;

const Results = () => {
	const [isLoading, setIsLoading] = useState(false);
	// const [results, setResults] = useState<results[]>([]);
	const [resMavie, setResMavie] = useState<number>(0);
	const [resPapel, setResPapel] = useState<number>(0);

	const results: results[] = [
		{
			name: 'Edson Mavie',
			votes: resMavie,
			imageURL:
				'https://***REMOVED***.s3.ap-northeast-1.amazonaws.com/mavie.jpg',
		},
		{
			name: 'João Papel',
			votes: resPapel,
			imageURL:
				'https://***REMOVED***.s3.ap-northeast-1.amazonaws.com/papel.jpeg',
		},
	];

	useEffect(() => {
		API.get('/result/Edson Mavie')
			.then((response) => {
				if (response.status === 200) {
					setResMavie(response.data);
				}
			})
			.catch((error) => {
				console.log('Something went wrong when calling the result for Mavie');
			});
	}, []);

	useEffect(() => {
		API.get('/result/João Papel')
			.then((response) => {
				if (response.status === 200) {
					setResPapel(response.data);
				}
			})
			.catch((error) => {
				console.log('Something went wrong when calling the result for Papel');
			});
	}, []);
	// make a database call and use setResults List to get real results

	return (
		<StyledResultCards>
			{results.map((result: results, index: number) => {
				return (
					<ResultCard
						key={index}
						candidateImageURL={result.imageURL}
						name={result.name}
						votes={result.votes}
					/>
				);
			})}
		</StyledResultCards>
	);
};

export default Results;
