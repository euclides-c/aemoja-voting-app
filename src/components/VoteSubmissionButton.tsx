import { Form, Input, Button } from 'antd';

interface Props {
	setVotingToken: (t: string) => void;
}

const VoteSubmissionButton: React.FC<Props> = ({ setVotingToken }) => {
	const onFinish = (values: string) => {
		console.log('Success:', values);
		setVotingToken(values);
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
				name='email'
				rules={[
					{
						required: true,
						message: 'Por favor introduza o seu email',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				label='Vote Token'
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
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default VoteSubmissionButton;
