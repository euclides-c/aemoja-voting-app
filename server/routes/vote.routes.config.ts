import { Application } from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from '../common/common.routes.config';
import voteController from '../controllers/vote.controller';
import votersController from '../controllers/registration.controller';

import votersMiddleware from '../middleware/registration.middleware';
import voteMiddleware from '../middleware/vote.middleware';

import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export class VoteRoutes extends CommonRoutesConfig {
	constructor(app: Application) {
		super(app, 'VoteRoutes');
	}

	configureRoutes() {
		//  The middleware validateTokenBelongToSameVoter also checks if the voter actually exist,
		// and the token also actually exist (valid) by querying the Voter document twice, by email and by token,
		// then comparing the result
		this.app
			.route(`/vote`)
			.get(votersController.getCandidates)
			.post(
				body('votersEmail').isEmail(),
				BodyValidationMiddleware.verifyBodyFieldsErrors,
				voteMiddleware.validateTokenBelongToSameVoter,
				voteMiddleware.validateIfHasVotedByEmail,
				voteController.vote
			);

		this.app.param(`voterId`, votersMiddleware.extractVoterId);

		// Todo Add other routes

		// this.app
		// 	.route(`/voters/:voterID`)
		// 	.all(votersMiddleware.validateVoterExists)
		// 	.get(voteController.)
		// 	.delete(votersController.removeVoters);

		// this.app
		// 	.route(`/voters/:email`)
		// 	.all(votersMiddleware.validateVoterExists)
		// 	.get(votersController.getVotersByEmail)
		// 	.delete(votersController.removeVoterByEmail);

		return this.app;
	}
}
