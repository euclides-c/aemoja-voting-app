import VoteDao from '../daos/vote.dao';

//  add service to send e-mail upon user creation
class ResultService {
	// The below should actually be used by the result endpoint/controller !!!

	async countCandidateVotes(candidateName: string) {
		return VoteDao.getVotesByCandidate(candidateName);
	}

	async findVotedCandidateByToken(token: string) {
		return VoteDao.getVotedCandidateByToken(token);
	}

	async findVotedCandidateByEmail(email: string) {
		return VoteDao.getVoterByEmail(email);
	}
}

export default new ResultService();
