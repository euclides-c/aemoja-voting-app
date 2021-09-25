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
const vote_dao_1 = __importDefault(require("../daos/vote.dao"));
//  add service to send e-mail upon user creation
class ResultService {
    // The below should actually be used by the result endpoint/controller !!!
    countCandidateVotes(candidateName) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.getVotesByCandidate(candidateName);
        });
    }
    findVotedCandidateByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.getVotedCandidateByToken(token);
        });
    }
    findVotedCandidateByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return vote_dao_1.default.getVoterByEmail(email);
        });
    }
}
exports.default = new ResultService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy9yZXN1bHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUF1QztBQUV2QyxpREFBaUQ7QUFDakQsTUFBTSxhQUFhO0lBQ2xCLDBFQUEwRTtJQUVwRSxtQkFBbUIsQ0FBQyxhQUFxQjs7WUFDOUMsT0FBTyxrQkFBTyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVLLHlCQUF5QixDQUFDLEtBQWE7O1lBQzVDLE9BQU8sa0JBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFSyx5QkFBeUIsQ0FBQyxLQUFhOztZQUM1QyxPQUFPLGtCQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUNEO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9