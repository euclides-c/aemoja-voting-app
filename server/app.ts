import express, { Application, json, Request, Response } from 'express';
import { createServer, Server } from 'http';
import { format, transports } from 'winston';
import { LoggerOptions, logger } from 'express-winston';
import cors from 'cors';
import dotenv from 'dotenv';
import debug, { IDebugger } from 'debug';

import { CommonRoutesConfig } from './common/common.routes.config';
import { VotersRoutes } from './routes/registration.routes.config';
import { VoteRoutes } from './routes/vote.routes.config';
import { ResultRoutes } from './routes/result.routes.config';

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
	throw dotenvResult.error;
}
const app: Application = express();
const server: Server = createServer(app);
const port = 5000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: IDebugger = debug('app');

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(json());
app.use(cors(corsOptions));

const loggerOptions: LoggerOptions = {
	transports: [new transports.Console()],
	format: format.combine(
		format.json(),
		format.prettyPrint(),
		format.colorize({ all: true })
	),
};

if (!process.env.DEBUG) {
	loggerOptions.meta = true; // when not debugging, make terse
}

app.use(logger(loggerOptions));

routes.push(new VotersRoutes(app));
routes.push(new VoteRoutes(app));
routes.push(new ResultRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: Request, res: Response) => {
	res.status(200).send(runningMessage);
});
server.listen(port, () => {
	routes.forEach((route: CommonRoutesConfig) => {
		debugLog(`Routes configured for ${route.getName()}`);
	});
	console.log(runningMessage);
});
