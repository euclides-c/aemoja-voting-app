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
const vote_service_1 = __importDefault(require("../services/vote.service"));
const voters_service_1 = __importDefault(require("../services/voters.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:vote-middleware');
class VoteMiddleware {
    validateIfHasVotedByEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vote = yield vote_service_1.default.checkIfVotedByEmail(req.body.votersEmail);
            if (vote) {
                log(vote);
                res.status(400).send({ error: `Este Eleitor Já Votou` });
            }
            else {
                next();
            }
        });
    }
    validateHasNotVotedByToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vote = yield vote_service_1.default.checkIfVotedByToken(req.body.token);
            if (vote) {
                res
                    .status(400)
                    .send({ error: `Este Token Jà Foi Usado Pelo Respectivo Eleitor ` });
            }
            else {
                next();
            }
        });
    }
    validateTokenBelongToSameVoter(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const voterToken = yield voters_service_1.default.getVoterByToken(req.body.token);
            const voterEmail = yield voters_service_1.default.getVoterByEmail(req.body.votersEmail);
            log(voterToken);
            log(voterEmail);
            if (JSON.stringify(voterToken) === JSON.stringify(voterEmail)) {
                next();
            }
            else {
                res.status(400).send({
                    error: `O Email E O Token de Votação Não Pertecem ao Mesmo Eleitor `,
                });
            }
        });
    }
    validateVoterExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const voter = yield voters_service_1.default.readById(req.params.voterId);
            if (voter) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Eleitor ${req.params.voterId} Não Encontrado`,
                });
            }
        });
    }
    extractVoterId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.voterId;
            next();
        });
    }
}
exports.default = new VoteMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbWlkZGxld2FyZS92b3RlLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0RUFBbUQ7QUFDbkQsZ0ZBQXVEO0FBQ3ZELGtEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBYyxlQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVwRCxNQUFNLGNBQWM7SUFDYix5QkFBeUIsQ0FDOUIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekUsSUFBSSxJQUFJLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNQO1FBQ0YsQ0FBQztLQUFBO0lBRUssMEJBQTBCLENBQy9CLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7O1lBRWxCLE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLElBQUksSUFBSSxFQUFFO2dCQUNULEdBQUc7cUJBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0RBQWtELEVBQUUsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1A7UUFDRixDQUFDO0tBQUE7SUFFSyw4QkFBOEIsQ0FDbkMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxVQUFVLEdBQUcsTUFBTSx3QkFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sVUFBVSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxlQUFlLENBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNwQixDQUFDO1lBRUYsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDOUQsSUFBSSxFQUFFLENBQUM7YUFDUDtpQkFBTTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDcEIsS0FBSyxFQUFFLDZEQUE2RDtpQkFDcEUsQ0FBQyxDQUFDO2FBQ0g7UUFDRixDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUN4RSxNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUM7YUFDUDtpQkFBTTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDcEIsS0FBSyxFQUFFLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGlCQUFpQjtpQkFDckQsQ0FBQyxDQUFDO2FBQ0g7UUFDRixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDbkUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDO0tBQUE7Q0FDRDtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==