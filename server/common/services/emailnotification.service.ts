import nodemailer from 'nodemailer';

const Emailnotification = async (
	receiver: string,
	candidateName: string,
	token: string,
	action: string
) => {
	if (action != 'registration' && action != 'vote') {
		throw new Error("Action is invalid, please pass 'registration' or 'vote'");
	}

	const REGISTRATION_SUBJECT =
		'Confirmação de Registo na Plataforma Eleitoral da  AEMOJA';
	const REGISTRATION_MESSAGE = `Acabou de registar-se na Plataforma Eleitoral da AEMOJA. Quando for votar, use o código seguinte para validar o seu voto: ${token}`;
	const VOTE_CONFIRMATION_SUBJECT =
		'O Seu Voto Foi Registado Na Plataforma Eleitoral da AEMOJA';
	const VOTE_CONFIRMATION_MESSAGE = `Votou em ${candidateName} na eleição presidencial da AEMOJA"`;

	// Transport object definition

	const transporter = nodemailer.createTransport({
		host: '***REMOVED***',
		port: 465,
		secure: true,
		auth: {
			user: 'apikey',
			pass: '***REMOVED***',
		},
	});

	// send mail with defined transport object
	if (action === 'registration') {
		const info = await transporter.sendMail({
			from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@***REMOVED***.org>',
			to: receiver,
			subject: REGISTRATION_SUBJECT,
			text: REGISTRATION_MESSAGE,
			html: `<b> ${REGISTRATION_MESSAGE} </b>`,
		});
		return info.messageId;
	}
	if (action === 'vote') {
		const info = await transporter.sendMail({
			from: '"Plataforma Eleitoral da AEMOJA" <plataformaeleitoral@***REMOVED***.org>',
			to: receiver,
			subject: VOTE_CONFIRMATION_SUBJECT,
			text: VOTE_CONFIRMATION_MESSAGE,
			html: `<b> ${VOTE_CONFIRMATION_MESSAGE} </b>`,
		});
		return info.messageId;
	}

	// Todo: check possible error and handling them (starting from incorrect email: but the middleware should catch incorrect emails)
};

export default Emailnotification;
