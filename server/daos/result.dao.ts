// Update this file

import debug, { IDebugger } from 'debug';
import { VoteDto } from '../dto/vote.dto';
import mongooseService from '../common/services/mongoose.service';

const log: IDebugger = debug('app: in-memory-dao');

class VoteDao {
	constructor() {
		log('Created new instance of VoteDao');
	}
	Schema = mongooseService.getMongoose().Schema;

	voteSchema = new this.Schema(
		{
			_id: String,
			candidateName: String,
			votersEmail: String,
			token: String,
		},
		{ id: false }
	);

	Vote = mongooseService.getMongoose().model('Result', this.voteSchema);

	async getCandidates() {
		return this.Vote.find().exec();
	}
	// cast a vote

	async addVote(voteFields: VoteDto) {
		const vote = new this.Vote(voteFields);
		await vote.save();
		// what to return?
		return vote;
	}
	// count votes per candidate
	async getVotesByCandidate(candidate: string) {
		console.log();
		return this.Vote.find({ candidateName: candidate }).count();
	}

	// given a token, find who got the vote

	async getVotedCandidateByToken(token: string) {
		return this.Vote.findOne({ token: token }).exec();
	}

	// given a token, find who casted it
	async getVoterByToken(token: string) {
		return this.Vote.findOne({ token: token }).exec();
	}

	async getVotes(limit = 100, page = 0) {
		return this.Vote.find()
			.limit(limit)
			.skip(limit * page)
			.exec();
	}
}

export default new VoteDao();
