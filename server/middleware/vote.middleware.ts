import { Request, Response, NextFunction } from "express";
import voteService from "../services/vote.service";
import votersService from "../services/voters.service";
import debug, { IDebugger } from "debug";

const log: IDebugger = debug("app:vote-middleware");

class VoteMiddleware {
  async validateIfHasVotedByEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const vote = await voteService.checkIfVotedByEmail(req.body.votersEmail);
    if (vote) {
      log(vote);
      res.status(400).send({ error: `Este Eleitor Já Votou` });
    } else {
      next();
    }
  }

  async validateHasNotVotedByToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const vote = await voteService.checkIfVotedByToken(req.body.token);
    if (vote) {
      res
        .status(400)
        .send({ error: `Este Token Jà Foi Usado Pelo Respectivo Eleitor ` });
    } else {
      next();
    }
  }

  async validateTokenBelongToSameVoter(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const voterToken = await votersService.getVoterByToken(req.body.token);
    const voterEmail = await votersService.getVoterByEmail(
      req.body.votersEmail
    );

    log(voterToken);
    log(voterEmail);
    if (JSON.stringify(voterToken) === JSON.stringify(voterEmail)) {
      next();
    } else {
      res.status(400).send({
        error: `O Email E O Token de Votação Não Pertecem ao Mesmo Eleitor `,
      });
    }
  }

  async validateVoterExists(req: Request, res: Response, next: NextFunction) {
    const voter = await votersService.readById(req.params.voterId);
    if (voter) {
      next();
    } else {
      res.status(404).send({
        error: `Eleitor ${req.params.voterId} Não Encontrado`,
      });
    }
  }

  async extractVoterId(req: Request, res: Response, next: NextFunction) {
    req.body.id = req.params.voterId;
    next();
  }
}

export default new VoteMiddleware();
