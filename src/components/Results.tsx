import { useState } from 'react';
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

	return (
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
	);
};

export default Results;
