import { PageHeader, Button, Statistic, Descriptions } from 'antd';
import { ReactChild } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory();

	const renderContent = (column = 2) => (
		<Descriptions size='small' column={column}>
			<Descriptions.Item label='Data Da Eleição'>2021-08-31</Descriptions.Item>
			{/* <Descriptions.Item label='Recenseamento'>
				Clique Em Recensear
			</Descriptions.Item>
			<Descriptions.Item label='Votação'>2017-10-10</Descriptions.Item>
			<Descriptions.Item label='Resultados'>
				Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
			</Descriptions.Item> */}
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
				title='Plataforma de Eleiçōes da AEMOJA'
				extra={[
					<Button
						key='Registration'
						onClick={() => history.push('/Registration')}>
						Recensear
					</Button>,
					<Button key='vote' onClick={() => history.push('/Vote')}>
						Votar
					</Button>,
					<Button
						key='Results'
						onClick={() => history.push('/Results')}
						type='primary'>
						Resultados
					</Button>,
				]}>
				<Content extra={extraContent}>{renderContent()}</Content>
			</PageHeader>
		</>
	);
};

export default Header;
