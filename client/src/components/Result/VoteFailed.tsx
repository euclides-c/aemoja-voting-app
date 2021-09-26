import { Result } from 'antd';

const VoteFailed = () => {
	return (
		<div>
			<Result status='error' title='Ocorreu um erro durante o voto' />;
		</div>
	);
};

export default VoteFailed;
