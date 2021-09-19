import React from 'react';
import { Image, Card } from 'antd';

interface Props {
	name: string;
	imageURL: string;
}

// The Drower Component to show candidate details should appear hear
const handleOnClick = (e: any) => {
	e.preventDefault();
};

const CandidateCard: React.FC<Props> = ({ name, imageURL }) => {
	return (
		<Card title={name} bordered={false} onClick={handleOnClick}>
			<Image
				// This should be the amazon s3 bucket url
				src={imageURL}
			/>
		</Card>
	);
};

export default CandidateCard;
