import nodemailer from 'nodemailer';
import VoteDao from '../daos/vote.dao';
import { VoteDto } from '../dto/vote.dto';

//  add service to send e-mail upon user creation
class VoteService {
	async castVote(resource: VoteDto) {
		return VoteDao.addVote(resource);
	}

	// The below should actually be used by the result endpoint/controller !!!

	async checkIfVotedByEmail(voterEmail: string) {
		return VoteDao.getVoterByEmail(voterEmail);
	}

	async checkIfVotedByToken(token: string) {
		return VoteDao.getVoterByToken(token);
	}

}

export default new VoteService();
