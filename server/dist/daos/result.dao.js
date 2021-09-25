"use strict";
// Update this file
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
const mongoose_service_1 = __importDefault(require("../common/services/mongoose.service"));
const log = debug_1.default('app: in-memory-dao');
class VoteDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.voteSchema = new this.Schema({
            _id: String,
            candidateName: String,
            votersEmail: String,
            token: String,
        }, { id: false });
        this.Vote = mongoose_service_1.default.getMongoose().model('Result', this.voteSchema);
        log('Created new instance of VoteDao');
    }
    getCandidates() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Vote.find().exec();
        });
    }
    // cast a vote
    addVote(voteFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const vote = new this.Vote(voteFields);
            yield vote.save();
            // what to return?
            return vote;
        });
    }
    // count votes per candidate
    getVotesByCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log();
            return this.Vote.find({ candidateName: candidate }).count();
        });
    }
    // given a token, find who got the vote
    getVotedCandidateByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Vote.findOne({ token: token }).exec();
        });
    }
    // given a token, find who casted it
    getVoterByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Vote.findOne({ token: token }).exec();
        });
    }
    getVotes(limit = 100, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Vote.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new VoteDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rhb3MvcmVzdWx0LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COzs7Ozs7Ozs7Ozs7OztBQUVuQixrREFBeUM7QUFFekMsMkZBQWtFO0FBRWxFLE1BQU0sR0FBRyxHQUFjLGVBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sT0FBTztJQUNaO1FBR0EsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQzNCO1lBQ0MsR0FBRyxFQUFFLE1BQU07WUFDWCxhQUFhLEVBQUUsTUFBTTtZQUNyQixXQUFXLEVBQUUsTUFBTTtZQUNuQixLQUFLLEVBQUUsTUFBTTtTQUNiLEVBQ0QsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQ2IsQ0FBQztRQUVGLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBZHJFLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFlSyxhQUFhOztZQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBQ0QsY0FBYztJQUVSLE9BQU8sQ0FBQyxVQUFtQjs7WUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLGtCQUFrQjtZQUNsQixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtJQUNELDRCQUE0QjtJQUN0QixtQkFBbUIsQ0FBQyxTQUFpQjs7WUFDMUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVELHVDQUF1QztJQUVqQyx3QkFBd0IsQ0FBQyxLQUFhOztZQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBRUQsb0NBQW9DO0lBQzlCLGVBQWUsQ0FBQyxLQUFhOztZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1YsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=