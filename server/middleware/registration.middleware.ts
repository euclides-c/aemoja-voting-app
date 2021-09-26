import { Request, Response, NextFunction } from 'express';
import votersService from '../services/registration.service';
import debug, { IDebugger } from 'debug';

const log: IDebugger = debug('app:voters-controller');
class VotersMiddleware {
	async validateSameEmailDoesntExist(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const voter = await votersService.getVoterByEmail(req.body.email);
		if (voter) {
			res.status(400).send({ error: `User email already exists` });
		} else {
			next();
		}
	}

	async validateSameEmailBelongToSameVoter(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const voter = await votersService.getVoterByEmail(req.body.email);
		if (voter && voter._id === req.params.voterId) {
			next();
		} else {
			res.status(400).send({ error: `Invalid email` });
		}
	}

	// Here we need to use an arrow function to bind `this` correctly
	validatePatchEmail = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		if (req.body.email) {
			log('Validating email', req.body.email);

			this.validateSameEmailBelongToSameVoter(req, res, next);
		} else {
			next();
		}
	};

	async validateVoterExists(req: Request, res: Response, next: NextFunction) {
		const voter = await votersService.readById(req.params.voterId);
		if (voter) {
			next();
		} else {
			res.status(404).send({
				error: `User ${req.params.voterId} not found`,
			});
		}
	}

	async extractVoterId(req: Request, res: Response, next: NextFunction) {
		req.body.id = req.params.voterId;
		next();
	}
}

export default new VotersMiddleware();
