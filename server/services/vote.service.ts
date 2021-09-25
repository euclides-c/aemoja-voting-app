import nodemailer from 'nodemailer';
import VoteDao from '../daos/vote.dao';
import { VoteDto } from '../dto/vote.dto';

//  add service to send e-mail upon user creation
class VoteService {
	async castVote(resource: VoteDto) {
		return VoteDao.addVote(resource);
	}

	// The below should actually be used by the result endpoint/controller !!!

	async checkIfVotedByEmail(voterEmail: string) {
		return VoteDao.getVoterByEmail(voterEmail);
	}

	async checkIfVotedByToken(token: string) {
		return VoteDao.getVoterByToken(token);
	}

	async VoteConfirmationEmail(receiver: string, candidateName: string) {
		// let testAccount = await nodemailer.createTestAccount();

		let transporter = nodemailer.createTransport({
			host: 'smtp.sendgrid.net',
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: 'apikey', // generated ethereal user
				pass: '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', // generated ethereal password
			},
		});

		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@aemoja.org>', // sender address
			to: receiver,
			subject: 'O Seu Voto Foi Registado Na Plataforma Eleitoral da AEMOJA', // Subject line
			text: `Votou em ${candidateName} na eleição presidencial da AEMOJA`,
			html: `<b>  votou ${candidateName} na eleição presidencial da AEMOJA </b>`, // html body
		});

		console.log('Message sent: %s', info.messageId);
		return info.messageId;
	}
}

export default new VoteService();
