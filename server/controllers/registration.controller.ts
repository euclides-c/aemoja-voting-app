import { Request, Response } from 'express';
import debug, { IDebugger } from 'debug';
import votersService from '../services/registration.service';
import shortid from 'shortid';
import Emailnotification from '../common/services/emailnotification.service';
import getS3link from '../common/services/s3link.service';

const log: IDebugger = debug('app:voters-controller');
class VotersController {
	// transform this into get all voters, use the get list
	async listVoters(req: Request, res: Response) {
		const voters = await votersService.list(100, 0);
		res.status(200).send(voters);
	}

	// make this get voter working
	async getVotersById(req: Request, res: Response) {
		const voters = await votersService.readById(req.body.id);
		res.status(200).send(voters);
	}

	async getVotersByEmail(req: Request, res: Response) {
		const voters = await votersService.getVoterByEmail(req.body.email);
		res.status(200).send(voters);
	}

	async getCandidates(req: Request, res: Response) {
		const candidates = await votersService.listCandidates();
		res.status(200).send(candidates);
	}
	async getVotersToken(req: Request, res: Response) {
		const voters = await votersService.readById(req.body.token);
		res.status(200).send(voters);
	}

	async createVoters(req: Request, res: Response) {
		//  Token for vote confirmation. To be sent by e-mail to voter
		const token = shortid.generate();
		// create the voter

		const voterId = await votersService.create({ token, ...req.body });
		Emailnotification(req.body.email, ' ', token, 'registration');
		// votersService.sendEmail(req.body.email, token);
		res.status(201).send({ id: voterId });
	}

	async removeVoters(req: Request, res: Response) {
		log(await votersService.deleteById(req.body.id));
		res.status(204).send();
	}

	async removeVoterByEmail(req: Request, res: Response) {
		log(await votersService.deleteByEmail(req.body.email));
		res.status(204).send();
	}

	async getS3link(req: Request, res: Response) {
		// const uploadURL = await votersService.getS3link();
		const uploadURL = await getS3link();
		res.status(200).send(uploadURL);
	}
}

export default new VotersController();
