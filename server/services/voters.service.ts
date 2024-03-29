import nodemailer from "nodemailer";
import aws from "aws-sdk";
import crypto from "crypto";
import { promisify } from "util";
import VotersDao from "../daos/voters.dao";
import { CreateVotersDto } from "../dto/create.voters.dto";
import { log } from "winston";

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
  async readById(voterId: string) {
    log("reached service layer with voterId", voterId);
    return VotersDao.getVoterById(voterId);
  }

  async getVoterByEmail(email: string) {
    return VotersDao.getVoterByEmail(email);
  }

  async getVoterByToken(token: string) {
    return VotersDao.getVoterByToken(token);
  }
}
export default new VotersService();
