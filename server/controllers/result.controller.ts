import { Request, Response } from 'express';
import debug, { IDebugger } from 'debug';
import resultService from '../services/result.service';

const log: IDebugger = debug('app:results-controller');

class ResultController {
	// get votes per candidate
	// takes candidate name, returns number of votes
	async getResults(req: Request, res: Response) {
		log('Result Controller Was called', req.params.candidateName);

		const numberOfVotes = await resultService.countCandidateVotes(
			req.params.candidateName
		);

		log('Número de votos para o candidato ', numberOfVotes);

		res.status(200).send(JSON.stringify(numberOfVotes));
	}

	// Not exposed
	async getVotedCandidateByToken(req: Request, res: Response) {
		const votedCandidate = await resultService.findVotedCandidateByToken(
			req.body.token
		);
		res.status(200).send(votedCandidate);
	}
}

export default new ResultController();
