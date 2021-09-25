import aws from 'aws-sdk';
import { promisify } from 'util';
import crypto from 'crypto';

const getS3link = async () => {
	const region = 'ap-northeast-1';
	const bucketName = '***REMOVED***';
	const accessKeyId = '***REMOVED***';
	const secretAccessKey = '***REMOVED***';

	const s3 = new aws.S3({
		region,
		accessKeyId,
		secretAccessKey,
		signatureVersion: 'v4',
	});

	const randomBytes = promisify(crypto.randomBytes);
	const rawBytes = await randomBytes(16);
	const imageName = rawBytes.toString('hex');

	const params = {
		Bucket: bucketName,
		Key: imageName,
		Expires: 3600,
	};

	const uploadURL = await s3.getSignedUrlPromise('putObject', params);
	console.log(uploadURL);
	return uploadURL;
};

export default getS3link;
