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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const mongoose_service_1 = __importDefault(require("../common/services/mongoose.service"));
const log = debug_1.default('app: in-memory-dao');
class VotersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.voterSchema = new this.Schema({
            _id: String,
            name: String,
            email: String,
            universidade: String,
            bolsa: String,
            chegada: Number,
            candidate: Boolean,
            foto: String,
            bio: String,
            token: String,
        }, { id: false });
        this.Voter = mongoose_service_1.default.getMongoose().model('Voters', this.voterSchema);
        log('Created new instance of VotersDao');
    }
    addVoter(voterFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const voterId = shortid_1.default.generate();
            const voter = new this.Voter(Object.assign({ _id: voterId }, voterFields));
            yield voter.save();
            return voterId;
        });
    }
    getVoterByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.findOne({ email: email }).exec();
        });
    }
    getVoterByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.findOne({ token: token }).exec();
        });
    }
    getVoterById(voterId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.findOne({ _id: voterId }).populate('Voter').exec();
        });
    }
    getCandidates() {
        return __awaiter(this, void 0, void 0, function* () {
            log('reached the database layer');
            return this.Voter.find({ candidate: true }).exec();
        });
    }
    getVoter(limit = 100, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    removeVoterById(voterId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.deleteOne({ _id: voterId }).exec();
        });
    }
    removeVoterByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Voter.deleteOne({ email: email }).exec();
        });
    }
}
exports.default = new VotersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZXJzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rhb3Mvdm90ZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixrREFBeUM7QUFFekMsMkZBQWtFO0FBRWxFLE1BQU0sR0FBRyxHQUFjLGVBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sU0FBUztJQUNkO1FBR0EsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLGdCQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUM1QjtZQUNDLEdBQUcsRUFBRSxNQUFNO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxNQUFNO1lBQ3BCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsS0FBSyxFQUFFLE1BQU07U0FDYixFQUNELEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUNiLENBQUM7UUFFRixVQUFLLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQXBCdkUsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXFCSyxRQUFRLENBQUMsV0FBNEI7O1lBQzFDLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxpQkFDM0IsR0FBRyxFQUFFLE9BQU8sSUFDVCxXQUFXLEVBQ2IsQ0FBQztZQUNILE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLE9BQU8sT0FBTyxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxLQUFhOztZQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEtBQWE7O1lBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFDSyxZQUFZLENBQUMsT0FBZTs7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNsQixHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7aUJBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1YsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLE9BQWU7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFDSyxrQkFBa0IsQ0FBQyxLQUFhOztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLFNBQVMsRUFBRSxDQUFDIn0=