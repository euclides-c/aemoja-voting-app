"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const vote_service_1 = __importDefault(require("../services/vote.service"));
const log = debug_1.default('app:vote-controller');
class VoteController {
    vote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // takes email, token, and candidate voted
            // check email and and token validity, write a middleware
            const vote = yield vote_service_1.default.castVote(req.body);
            vote_service_1.default.VoteConfirmationEmail(req.body.votersEmail, req.body.candidateName);
            res.status(200).send(vote);
        });
    }
}
exports.default = new VoteController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvdm90ZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQXlDO0FBQ3pDLDRFQUFtRDtBQUVuRCxNQUFNLEdBQUcsR0FBYyxlQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVwRCxNQUFNLGNBQWM7SUFDYixJQUFJLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQ3JDLDBDQUEwQztZQUMxQyx5REFBeUQ7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsc0JBQVcsQ0FBQyxxQkFBcUIsQ0FDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUN0QixDQUFDO1lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=