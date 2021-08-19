import React from 'react';
import { Image, Descriptions } from 'antd';

const CandidateCard = () => {
	return (
		<div>
			<Image
				width={300}
				src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
			/>
			<Descriptions bordered={true} column={1}>
				<Descriptions.Item label='Name'>Eugenio Cossa</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default CandidateCard;
