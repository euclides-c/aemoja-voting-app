import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import debug, { IDebugger } from 'debug';

const log: IDebugger = debug('app:BodyValidation-middleware');

class BodyValidationMiddleware {
	verifyBodyFieldsErrors(req: Request, res: Response, next: NextFunction) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			log('Found Errors During Body Validation');
			return res.status(400).send({ errors: errors.array() });
		}
		next();
	}
}

export default new BodyValidationMiddleware();
