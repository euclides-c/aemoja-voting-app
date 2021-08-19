import { Form, Input, Button, Select, Switch, DatePicker, Space } from 'antd';
import Avatar from './UploadAvatar';
import { useState } from 'react';
// import styled from 'styled-components';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
/* eslint-enable no-template-curly-in-string */

// to do
//  Define an interface type for the data to be received, any remove any annotation
// Use arrow functions
// Define required states
// Make handlers work and print to the console

interface Voter {
	name: string;
	email: string;
	universidade: string;
	bolsa?: string;
	chegada: number;
	isCandidate: boolean;
	foto?: string;
	bio: string;
}
const RegistrationForm = () => {
	const { Option } = Select;
	const [isCandidate, setIsCandidate] = useState<boolean>(false);

	const onFinish = (values: Voter) => {
		console.log(values.name);
		console.log(values.universidade);
		console.log(values.chegada);
	};

	const onChange = (value: any) => {
		console.log(`selected ${value}`);
	};

	// function onChange(checked) {
	//     console.log(`switch to ${checked}`);
	//   }
	const handleCanditate = (checked: boolean) => {
		if (checked === true) {
			setIsCandidate(true);
		} else {
			setIsCandidate(false);
		}
	};

	return (
		<Form
			{...layout}
			name='Voter-registration'
			onFinish={onFinish}
			validateMessages={validateMessages}>
			<Form.Item
				name='name'
				label='Name'
				rules={[
					{
						required: true,
						type: 'string',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='email'
				label='Email'
				rules={[
					{
						type: 'email',
						required: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='universidade'
				label='Universidade'
				rules={[
					{
						type: 'string',
						required: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='bolsa'
				label='Bolsa'
				rules={[
					{
						type: 'string',
						required: false,
					},
				]}>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder='Selecione O Provedor da Bolsa'
					optionFilterProp='children'
					onChange={onChange}
					filterOption={(input, option: any) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}>
					<Option value='MEXT'>MEXT</Option>
					<Option value='ABE INTIATIVE'>ABE INITIATIVE</Option>
					<Option value='JICA'>JICA</Option>
					<Option value='OUTRA'>OUTRA</Option>
				</Select>
			</Form.Item>
			<Form.Item name='chegada' label='Ano De Chegada Ao Japão'>
				<Space>
					<DatePicker onChange={onChange} picker='year' />
				</Space>
			</Form.Item>
			<Form.Item
				name='Candidato'
				label='É Candidato'
				rules={[
					{
						type: 'boolean',
						required: false,
					},
				]}>
				<Switch onChange={handleCanditate} />
			</Form.Item>

			{isCandidate === true ? (
				<>
					<Form.Item name='foto' label='Carregar Foto'>
						<Avatar />
					</Form.Item>
					<Form.Item name='Bio' label='Bio'>
						<Input.TextArea />
					</Form.Item>
				</>
			) : null}

			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;
