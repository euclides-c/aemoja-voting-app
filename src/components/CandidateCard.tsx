import React from 'react';
import { Image, Descriptions } from 'antd';

const CandidateCard = () => {
	return (
		<div>
			<Image
				width={200}
				src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
			/>
			<Descriptions title='User Info' bordered={true} column={1}>
				<Descriptions.Item label='Name'>Eugenio Cossa</Descriptions.Item>
				<Descriptions.Item label='Universidade'>
					Nkobe University
				</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default CandidateCard;
