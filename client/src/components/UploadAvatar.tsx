import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

interface Props {
	SignedURL: string;
}

const Avatar: React.FC<Props> = ({ SignedURL }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImage] = useState<string>();

	const getBase64 = (img: any, callback: any) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};

	const beforeUpload = (file: any) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	};

	const handleChange = (info: any) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		// check if error
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl: any) => setImage(imageUrl));
			setLoading(false);
		}
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	return (
		<Upload
			method='PUT'
			name='avatar'
			listType='picture-card'
			showUploadList={false}
			action={SignedURL}
			beforeUpload={beforeUpload}
			onChange={handleChange}>
			{imageUrl ? (
				<img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
			) : (
				uploadButton
			)}
		</Upload>
	);
};

export default Avatar;
