import { Request, Response } from 'express';
import debug, { IDebugger } from 'debug';
import voteService from '../services/vote.service';
import Emailnotification from '../common/services/emailnotification.service';

const log: IDebugger = debug('app:vote-controller');

class VoteController {
	async vote(req: Request, res: Response) {
		// takes email, token, and candidate voted
		// check email and and token validity, write a middleware
		const vote = await voteService.castVote(req.body);
		Emailnotification(
			req.body.votersEmail,
			req.body.candidateName,
			' ',
			'vote'
		);

		// voteService.VoteConfirmationEmail(
		// 	req.body.votersEmail,
		// 	req.body.candidateName
		// );

		res.status(200).send(vote);
	}
}

export default new VoteController();
