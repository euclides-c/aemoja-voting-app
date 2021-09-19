import { Form, Input, Button } from 'antd';

interface Props {
	setVotingToken: (t: string) => void;
	setVotersEmail: (t: string) => void;
}

interface Vote {
	// chosenCandidate: string;
	votersEmail: string;
	token: string;
}

//  Fetch Form Values
const VoteSubmissionButton: React.FC<Props> = ({
	setVotingToken,
	setVotersEmail,
}) => {
	const onFinish = (values: Vote) => {
		setVotingToken(values.token.trim());
		setVotersEmail(values.votersEmail.toString().trim().toLowerCase());
		console.log(values.votersEmail.toLowerCase().trim());
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name='basic'
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 8,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}>
			<Form.Item
				label='Email'
				name='votersEmail'
				rules={[
					{
						required: true,
						message: 'Por favor introduza o seu email',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				label='Código de Voto'
				name='token'
				rules={[
					{
						required: true,
						message: 'Por favor introduza o seu token',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}>
				<Button type='primary' htmlType='submit'>
					Votar
				</Button>
			</Form.Item>
		</Form>
	);
};

export default VoteSubmissionButton;
