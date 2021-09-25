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
const result_service_1 = __importDefault(require("../services/result.service"));
const log = debug_1.default('app:results-controller');
class ResultController {
    // get votes per candidate
    // takes candidate name, returns number of votes
    getResults(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log('Result Controller Was called', req.params.candidateName);
            const numberOfVotes = yield result_service_1.default.countCandidateVotes(req.params.candidateName);
            log('Número de votos para o candidato ', numberOfVotes);
            res.status(200).send(JSON.stringify(numberOfVotes));
        });
    }
    // Not exposed
    getVotedCandidateByToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const votedCandidate = yield result_service_1.default.findVotedCandidateByToken(req.body.token);
            res.status(200).send(votedCandidate);
        });
    }
}
exports.default = new ResultController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9yZXN1bHQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QztBQUN6QyxnRkFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQWMsZUFBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFdkQsTUFBTSxnQkFBZ0I7SUFDckIsMEJBQTBCO0lBQzFCLGdEQUFnRDtJQUMxQyxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTlELE1BQU0sYUFBYSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxtQkFBbUIsQ0FDNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQ3hCLENBQUM7WUFFRixHQUFHLENBQUMsbUNBQW1DLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVELGNBQWM7SUFDUix3QkFBd0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDekQsTUFBTSxjQUFjLEdBQUcsTUFBTSx3QkFBYSxDQUFDLHlCQUF5QixDQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDZCxDQUFDO1lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==