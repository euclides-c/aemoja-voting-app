import { Form, Input, Button } from 'antd';

const VoteSubmissionButoon = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
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
				label='Vote Token'
				name='username'
				rules={[
					{
						required: true,
						message: 'Please Input Your Voting Token',
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

export default VoteSubmissionButoon;
