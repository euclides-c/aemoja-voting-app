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

const RegistrationForm = () => {
	const [isCandidate, setIsCandidate] = useState<boolean>(false);

	const onFinish = (values: any) => {
		console.log(values);
	};

	const { Option } = Select;

	function onChange(value: any) {
		console.log(`selected ${value}`);
	}

	function onBlur() {
		console.log('blur');
	}

	function onFocus() {
		console.log('focus');
	}

	function onSearch(val: any) {
		console.log('search:', val);
	}

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
			name='nest-messages'
			onFinish={onFinish}
			validateMessages={validateMessages}>
			<Form.Item
				name={['user', 'name']}
				label='Name'
				rules={[
					{
						required: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name={['user', 'email']}
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
				name={['user', 'Universidade']}
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
				name={['user', 'Bolsa']}
				label='Bolsa'
				rules={[
					{
						type: 'string',
						required: true,
					},
				]}>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder='Selecione O Provedor da Bolsa'
					optionFilterProp='children'
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option: any) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}>
					<Option value='MEXT'>MEXT</Option>
					<Option value='ABE INTIATIVE'>ABE INITIATIVE</Option>
					<Option value='JICA'>JICA</Option>
					<Option value='OUTRA'>OUTRA</Option>
				</Select>
			</Form.Item>
			<Form.Item name={['user', 'Chegada']} label='Ano De Chegada Ao Japão'>
				<Space>
					<DatePicker onChange={onChange} picker='year' />
				</Space>
			</Form.Item>
			<Form.Item
				name={['user', 'Candidato']}
				label='É Candidato'
				rules={[
					{
						type: 'boolean',
						required: true,
					},
				]}>
				<Switch onChange={handleCanditate} />
			</Form.Item>

			{isCandidate === true ? (
				<>
					<Form.Item name={['user', 'website']} label='Carregar Foto'>
						<Avatar />
					</Form.Item>
					<Form.Item name={['user', 'Bio']} label='Bio'>
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
