import { PageHeader, Button, Statistic, Descriptions } from 'antd';
import { ReactChild } from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory();

	const renderContent = (column = 2) => (
		<Descriptions size='small' column={column}>
			<Descriptions.Item label='Recenseamento Eleitoral'>
				7 e 8 de Setembro
			</Descriptions.Item>
			<Descriptions.Item label='Data Da Eleição'>
				20 de Setembro
			</Descriptions.Item>

			<Descriptions.Item label='Divulgação dos Resultados'>
				21 de Setembro
			</Descriptions.Item>

			<Descriptions.Item label='Tomada de Posse'>
				23 de Setembro
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
			{/* <Statistic
				title='Total de Recenseados'
				value={56}
				style={{
					marginRight: 32,
				}}
			/> */}
			{/* <Statistic title='Total de Votos' value={568.08} /> */}
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
