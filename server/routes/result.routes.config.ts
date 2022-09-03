import { Application } from "express";

import { CommonRoutesConfig } from "../common/common.routes.config";
import resultController from "../controllers/result.controller";

export class ResultRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "ResultRoutes");
  }

  configureRoutes() {
    this.app.route("/result/:candidateName").get(resultController.getResults);

    return this.app;
  }
}
