import React from 'react';
import { Image } from 'antd';

interface Props {
	candidateImageURL: string;
	votes: number;
	name: string;
}
const ResultCard: React.FC<Props> = ({ candidateImageURL, votes, name }) => {
	return (
		<div>
			<Image width={128} src={candidateImageURL} alt={name} />
			<div>{votes}</div>
		</div>
	);
};

export default ResultCard;
