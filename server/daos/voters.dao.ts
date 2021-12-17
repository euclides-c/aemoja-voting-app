import shortid from 'shortid';
import debug, { IDebugger } from 'debug';
import { CreateVotersDto } from '../dto/create.voters.dto';
import mongooseService from '../common/services/mongoose.service';

const log: IDebugger = debug('app: in-memory-dao');

class VotersDao {
	constructor() {
		log('Created new instance of VotersDao');
	}
	Schema = mongooseService.getMongoose().Schema;

	voterSchema = new this.Schema(
		{
			_id: String,
			name: String,
			email: String,
			universidade: String,
			bolsa: String,
			chegada: Number,
			candidato: Boolean,
			foto: String,
			bio: String,
			token: String,
		},
		{ id: false }
	);

	Voter = mongooseService.getMongoose().model('Voters', this.voterSchema);

	async addVoter(voterFields: CreateVotersDto) {
		const voterId = shortid.generate();
		const voter = new this.Voter({
			_id: voterId,
			...voterFields,
		});
		await voter.save();
		return voterId;
	}

	async getVoterByEmail(email: string) {
		return this.Voter.findOne({ email: email }).exec();
	}

	async getVoterByToken(token: string) {
		return this.Voter.findOne({ token: token }).exec();
	}
	async getVoterById(voterId: string) {
		return this.Voter.findOne({ _id: voterId }).populate('Voter').exec();
	}

	async getCandidates() {
		log('reached the database layer');
		return this.Voter.find({ candidato: true }).exec();
	}

	async getVoter(limit = 100, page = 0) {
		return this.Voter.find()
			.limit(limit)
			.skip(limit * page)
			.exec();
	}

	async removeVoterById(voterId: string) {
		return this.Voter.deleteOne({ _id: voterId }).exec();
	}
	async removeVoterByEmail(email: string) {
		return this.Voter.deleteOne({ email: email }).exec();
	}
}

export default new VotersDao();
