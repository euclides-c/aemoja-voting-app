import { PageHeader, Button, Statistic, Descriptions } from 'antd';
import { ReactChild } from 'react';

const Header = () => {
	const renderContent = (column = 2) => (
		<Descriptions size='small' column={column}>
			{/* <Descriptions.Item label='Created'>Lili Qu</Descriptions.Item> */}
			{/* <Descriptions.Item label='Association'> */}
			<a>421421</a>
			{/* </Descriptions.Item> */}
			<Descriptions.Item label='Recenseamento'>2017-01-10</Descriptions.Item>
			<Descriptions.Item label='Votação'>2017-10-10</Descriptions.Item>
			<Descriptions.Item label='Resultados'>
				Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
			</Descriptions.Item>
		</Descriptions>
	);

	const extraContent = (
		<div
			style={{
				display: 'flex',
				width: 'max-content',
				justifyContent: 'flex-end',
			}}>
			<Statistic
				title='Total de Recenseados'
				value={56}
				style={{
					marginRight: 32,
				}}
			/>
			<Statistic title='Total de Votos' value={568.08} />
		</div>
	);

	const Content = ({
		children,
		extra,
	}: {
		children: ReactChild;
		extra: any;
	}) => (
		<div className='content'>
			<div className='main'>{children}</div>
			<div className='extra'>{extra}</div>
		</div>
	);

	return (
		<>
			<PageHeader
				className='site-page-header-responsive'
				onBack={() => window.history.back()}
				title='Title'
				subTitle='This is a subtitle'
				extra={[
					<Button key='3'>Recensear</Button>,
					<Button key='2'>Votar</Button>,
					<Button key='1' type='primary'>
						Resultados
					</Button>,
				]}>
				<Content extra={extraContent}>{renderContent()}</Content>
			</PageHeader>
		</>
	);
};

export default Header;
