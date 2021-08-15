import React from 'react';
import { Image, Descriptions } from 'antd';

const CandidateCard = () => {
	return (
		<div>
			<Image src={'~/Users/euclides-c/Downloads/images.jpg'} />
			<Descriptions title='User Info' bordered={true} column={1}>
				<Descriptions.Item label='Name'>Eugenio Cossa</Descriptions.Item>
				<Descriptions.Item label='Universidade'>
					Nkobe University
				</Descriptions.Item>
				<Descriptions.Item label='Bolsa'>Jica</Descriptions.Item>
				<Descriptions.Item label='Ano de Chegada'>2018</Descriptions.Item>
				<Descriptions.Item label='Bio'> </Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default CandidateCard;
