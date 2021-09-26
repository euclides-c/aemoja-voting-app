import debug, { IDebugger } from 'debug';
import { VoteDto } from '../dto/vote.dto';
import mongooseService from '../common/services/mongoose.service';

const log: IDebugger = debug('app: creating vote dao');

class VoteDao {
	constructor() {
		log('Created new instance of VoteDao');
	}
	Schema = mongooseService.getMongoose().Schema;

	voteSchema = new this.Schema(
		{
			candidateName: String,
			votersEmail: String,
			token: String,
		},
		{ id: false }
	);

	Vote = mongooseService.getMongoose().model('Vote', this.voteSchema);

	async getCandidates() {
		return this.Vote.find().exec();
	}
	// cast a vote

	async addVote(voteFields: VoteDto) {
		log(`this is the object ${voteFields}`);
		const vote = new this.Vote(voteFields);
		await vote.save();
		log('The Request Reachead the Database Layer');
		return vote;
	}
	// count votes per candidate
	async getVotesByCandidate(candidateName: string) {
		log('Result Count reached here');
		return this.Vote.count({ candidateName: candidateName }).exec();
	}

	// given a token, find who got the vote
	async getVotedCandidateByToken(token: string) {
		return this.Vote.findOne({ token: token }).exec();
	}

	// given a token, find who casted it
	async getVoterByToken(token: string) {
		return this.Vote.findOne({ token: token }).exec();
	}

	async getVoterByEmail(votersEmail: string) {
		return this.Vote.findOne({ votersEmail: votersEmail }).exec();
	}

	async getVotes(limit = 100, page = 0) {
		return this.Vote.find()
			.limit(limit)
			.skip(limit * page)
			.exec();
	}
}

export default new VoteDao();
