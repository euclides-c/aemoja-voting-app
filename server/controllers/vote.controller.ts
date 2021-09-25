import { Request, Response } from 'express';
import debug, { IDebugger } from 'debug';
import voteService from '../services/vote.service';

const log: IDebugger = debug('app:vote-controller');

class VoteController {
	async vote(req: Request, res: Response) {
		// takes email, token, and candidate voted
		// check email and and token validity, write a middleware
		const vote = await voteService.castVote(req.body);
		voteService.VoteConfirmationEmail(
			req.body.votersEmail,
			req.body.candidateName
		);

		res.status(200).send(vote);
	}
}

export default new VoteController();
