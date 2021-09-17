import { useState } from 'react';
import { Result } from 'antd';
import ResultCard from './ResultCard';

interface results {
	name: string;
	votes: number;
	imageURL: string;
}
const Results = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [results, setResults] = useState<results[]>([]);

	// make a database call and use setResults List to get real results
	const date = new Date();

	return date.getMonth() >= 8 && date.getDay() >= 21 ? (
		<>
			{isLoading === false ? (
				results.map((result: results, index: number) => {
					return (
						<>
							<ResultCard
								key={index}
								candidateImageURL={result.imageURL}
								name={result.name}
								votes={result.votes}
							/>
						</>
					);
				})
			) : (
				<div> Results Not Yet Available </div>
			)}
			;
		</>
	) : (
		<Result
			status='403'
			title='403'
			subTitle='Esta Página Estará Disponivel a 21 de Setembro.'
		/>
	);
};

export default Results;
