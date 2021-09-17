import React from 'react';
import { Image, Card } from 'antd';

interface Props {
	name: string;
}

// The Drower Component to show candidate details should appear hear

const CandidateCard: React.FC<Props> = ({ name }) => {
	return (
		<Card title={name} bordered={false}>
			<Image
				// This should be the amazon s3 bucket url
				src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
			/>
		</Card>
	);
};

export default CandidateCard;
