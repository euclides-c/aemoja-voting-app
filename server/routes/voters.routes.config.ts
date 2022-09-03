import { Application } from "express";
import { body } from "express-validator";

import { CommonRoutesConfig } from "../common/common.routes.config";
import votersController from "../controllers/voters.controller";
import votersMiddleware from "../middleware/voters.middleware";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";

export class VotersRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "VotersRoutes");
  }

  configureRoutes() {
    this.app.route("/voters/slink").get(votersController.getS3link);
    this.app
      .route("/voters")
      .get(votersController.listVoters)
      .post(
        body("email").isEmail(),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        votersMiddleware.validateSameEmailDoesntExist,
        votersController.createVoters
      );

    this.app.route("/voters/candidates").get(votersController.getCandidates);

    // this.app.param('voterId', votersMiddleware.extractVoterId);

    this.app
      .route("/voters/:voterID")
      .all(votersMiddleware.validateVoterExists)
      .get(votersController.getVotersById)
      .delete(votersController.removeVoters);

    this.app
      .route("/voters/:email")
      .all(votersMiddleware.validateVoterExists)
      .get(votersController.getVotersByEmail)
      .delete(votersController.removeVoterByEmail);

    return this.app;
  }
}
