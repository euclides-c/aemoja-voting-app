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
const mongoose_service_1 = __importDefault(require("../common/services/mongoose.service"));
const log = debug_1.default('app: creating vote dao');
class VoteDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.voteSchema = new this.Schema({
            candidateName: String,
            votersEmail: String,
            token: String,
        }, { id: false });
        this.Vote = mongoose_service_1.default.getMongoose().model('Vote', this.voteSchema);
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
            log(`this is the object ${voteFields}`);
            const vote = new this.Vote(voteFields);
            yield vote.save();
            log('The Request Reachead the Database Layer');
            return vote;
        });
    }
    // count votes per candidate
    getVotesByCandidate(candidateName) {
        return __awaiter(this, void 0, void 0, function* () {
            log('Result Count reached here');
            return this.Vote.count({ candidateName: candidateName }).exec();
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
    getVoterByEmail(votersEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Vote.findOne({ votersEmail: votersEmail }).exec();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kYW9zL3ZvdGUuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXlDO0FBRXpDLDJGQUFrRTtBQUVsRSxNQUFNLEdBQUcsR0FBYyxlQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV2RCxNQUFNLE9BQU87SUFDWjtRQUdBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUU5QyxlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUMzQjtZQUNDLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLEtBQUssRUFBRSxNQUFNO1NBQ2IsRUFDRCxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FDYixDQUFDO1FBRUYsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFibkUsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWNLLGFBQWE7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFDRCxjQUFjO0lBRVIsT0FBTyxDQUFDLFVBQW1COztZQUNoQyxHQUFHLENBQUMsc0JBQXNCLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0lBQ0QsNEJBQTRCO0lBQ3RCLG1CQUFtQixDQUFDLGFBQXFCOztZQUM5QyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakUsQ0FBQztLQUFBO0lBRUQsdUNBQXVDO0lBQ2pDLHdCQUF3QixDQUFDLEtBQWE7O1lBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFRCxvQ0FBb0M7SUFDOUIsZUFBZSxDQUFDLEtBQWE7O1lBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsV0FBbUI7O1lBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQzs7WUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtpQkFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDbEIsSUFBSSxFQUFFLENBQUM7UUFDVixDQUFDO0tBQUE7Q0FDRDtBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUMifQ==