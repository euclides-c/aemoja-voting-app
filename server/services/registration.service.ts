import VotersDao from '../daos/registration.dao';
import { CreateVotersDto } from '../dto/create.voters.dto';

//  add service to send e-mail upon user creation
class VotersService {
	async create(resource: CreateVotersDto) {
		return VotersDao.addVoter(resource);
	}

	// make delete by email
	async deleteById(id: string) {
		return VotersDao.removeVoterById(id);
	}

	async deleteByEmail(email: string) {
		return VotersDao.removeVoterByEmail(email);
	}

	// get all voters
	async list(limit: number, page: number) {
		return VotersDao.getVoter(limit, page);
	}

	async listCandidates() {
		return VotersDao.getCandidates();
	}

	// make this to return a voters email given the voter ID
	async readById(id: string) {
		return VotersDao.getVoterById(id);
	}

	async getVoterByEmail(email: string) {
		return VotersDao.getVoterByEmail(email);
	}

	async getVoterByToken(token: string) {
		return VotersDao.getVoterByToken(token);
	}
}
export default new VotersService();
