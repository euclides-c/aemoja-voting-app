import React from 'react';
import { Image, Descriptions } from 'antd';

interface Props {
	name: string;
	// universidade: string;
}

const CandidateCard: React.FC<Props> = ({ name }) => {
	return (
		<div>
			<Image
				width={128}
				// This should be the amazon s3 bucket url
				src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
			/>
			<Descriptions bordered={true} column={1}>
				<Descriptions.Item label='Name'>{name}</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default CandidateCard;
