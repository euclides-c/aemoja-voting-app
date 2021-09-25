"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const http_1 = require("http");
const winston_1 = require("winston");
const express_winston_1 = require("express-winston");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const debug_1 = __importDefault(require("debug"));
const voters_routes_config_1 = require("./routes/voters.routes.config");
const vote_routes_config_1 = require("./routes/vote.routes.config");
const result_routes_config_1 = require("./routes/result.routes.config");
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const app = express_1.default();
const server = http_1.createServer(app);
const port = 5000;
const routes = [];
const debugLog = debug_1.default('app');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express_1.json());
app.use(cors_1.default(corsOptions));
const loggerOptions = {
    transports: [new winston_1.transports.Console()],
    format: winston_1.format.combine(winston_1.format.json(), winston_1.format.prettyPrint(), winston_1.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = true; // when not debugging, make terse
}
app.use(express_winston_1.logger(loggerOptions));
routes.push(new voters_routes_config_1.VotersRoutes(app));
routes.push(new vote_routes_config_1.VoteRoutes(app));
routes.push(new result_routes_config_1.ResultRoutes(app));
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF3RTtBQUN4RSwrQkFBNEM7QUFDNUMscUNBQTZDO0FBQzdDLHFEQUF3RDtBQUN4RCxnREFBd0I7QUFDeEIsb0RBQTRCO0FBQzVCLGtEQUF5QztBQUd6Qyx3RUFBNkQ7QUFDN0Qsb0VBQXlEO0FBQ3pELHdFQUE2RDtBQUU3RCxNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtJQUN2QixNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7Q0FDekI7QUFDRCxNQUFNLEdBQUcsR0FBZ0IsaUJBQU8sRUFBRSxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFXLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLE1BQU0sTUFBTSxHQUE4QixFQUFFLENBQUM7QUFDN0MsTUFBTSxRQUFRLEdBQWMsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXpDLE1BQU0sV0FBVyxHQUFHO0lBQ25CLE1BQU0sRUFBRSxHQUFHO0lBQ1gsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLDZEQUE2RDtDQUN4RixDQUFDO0FBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFM0IsTUFBTSxhQUFhLEdBQWtCO0lBQ3BDLFVBQVUsRUFBRSxDQUFDLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQ3JCLGdCQUFNLENBQUMsSUFBSSxFQUFFLEVBQ2IsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDOUI7Q0FDRCxDQUFDO0FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQ3ZCLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsaUNBQWlDO0NBQzVEO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLG1DQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQ0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFbkMsTUFBTSxjQUFjLEdBQUcsc0NBQXNDLElBQUksRUFBRSxDQUFDO0FBQ3BFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDNUMsUUFBUSxDQUFDLHlCQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQyJ9