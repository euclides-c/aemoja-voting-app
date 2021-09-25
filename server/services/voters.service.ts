import nodemailer from 'nodemailer';
import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';
import VotersDao from '../daos/voters.dao';
import { CreateVotersDto } from '../dto/create.voters.dto';

//  add service to send e-mail upon user creation
class VotersService {
	async create(resource: CreateVotersDto) {
		return VotersDao.addVoter(resource);
	}

	// make delete by email
	async deleteById(id: string) {
		return VotersDao.removeVoterById(id);
	}

	async deleteByEmail(email: string) {
		return VotersDao.removeVoterByEmail(email);
	}

	// get all voters
	async list(limit: number, page: number) {
		return VotersDao.getVoter(limit, page);
	}

	async listCandidates() {
		return VotersDao.getCandidates();
	}

	// make this to return a voters email given the voter ID
	async readById(id: string) {
		return VotersDao.getVoterById(id);
	}

	async getVoterByEmail(email: string) {
		return VotersDao.getVoterByEmail(email);
	}

	async getVoterByToken(token: string) {
		return VotersDao.getVoterByToken(token);
	}

	// async sendEmail(receiver: string, token: string) {
	// 	// let testAccount = await nodemailer.createTestAccount();

	// 	let transporter = nodemailer.createTransport({
	// 		host: '***REMOVED***',
	// 		port: 465,
	// 		secure: true, // true for 465, false for other ports
	// 		auth: {
	// 			user: 'apikey',
	// 			pass: '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',
	// 		},
	// 	});

	// 	// send mail with defined transport object
	// 	let info = await transporter.sendMail({
	// 		from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@***REMOVED***.org>', // sender address
	// 		to: [receiver, 'deliodownload@gmail.com'], // list of receivers
	// 		subject: 'Confirmação de Registo na Plataforma Eleitoral da  AEMOJA', // Subject line
	// 		text: `Acabou de registar-se na Plataforma Eleitoral da AEMOJA. Quando for votar, use o código seguinte para validar o seu voto: ${token}`,
	// 		html: `<b> Acabou de registar-se na Plataforma Eleitoral da AEMOJA. Quando for votar, use o código seguinte para validar o seu voto ${token}</b>`, // html body
	// 	});

	// 	console.log('Message sent: %s', info.messageId);
	// 	return info.messageId;
	// }

	// async getS3link() {
	// 	const region = 'ap-northeast-1';
	// 	const bucketName = '***REMOVED***';
	// 	const accessKeyId = '***REMOVED***';
	// 	const secretAccessKey = '***REMOVED***';

	// 	const s3 = new aws.S3({
	// 		region,
	// 		accessKeyId,
	// 		secretAccessKey,
	// 		signatureVersion: 'v4',
	// 	});

	// 	const randomBytes = promisify(crypto.randomBytes);
	// 	const rawBytes = await randomBytes(16);
	// 	const imageName = rawBytes.toString('hex');

	// 	const params = {
	// 		Bucket: bucketName,
	// 		Key: imageName,
	// 		Expires: 3600,
	// 	};

	// 	const uploadURL = await s3.getSignedUrlPromise('putObject', params);
	// 	console.log(uploadURL);
	// 	return uploadURL;
	// }
}
export default new VotersService();
