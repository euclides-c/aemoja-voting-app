"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const vote_controller_1 = __importDefault(require("../controllers/vote.controller"));
const voters_controller_1 = __importDefault(require("../controllers/voters.controller"));
const voters_middleware_1 = __importDefault(require("../middleware/voters.middleware"));
const vote_middleware_1 = __importDefault(require("../middleware/vote.middleware"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
class VoteRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'VoteRoutes');
    }
    configureRoutes() {
        //  The middleware validateTokenBelongToSameVoter also checks if the voter actually exist,
        // and the token also actually exist (valid) by querying the Voter document twice, by email and by token,
        // then comparing the result
        this.app
            .route(`/vote`)
            .get(voters_controller_1.default.getCandidates)
            .post(express_validator_1.body('votersEmail').isEmail(), body_validation_middleware_1.default.verifyBodyFieldsErrors, vote_middleware_1.default.validateTokenBelongToSameVoter, vote_middleware_1.default.validateIfHasVotedByEmail, vote_controller_1.default.vote);
        this.app.param(`voterId`, voters_middleware_1.default.extractVoterId);
        // Todo Add other routes
        // this.app
        // 	.route(`/voters/:voterID`)
        // 	.all(votersMiddleware.validateVoterExists)
        // 	.get(voteController.)
        // 	.delete(votersController.removeVoters);
        // this.app
        // 	.route(`/voters/:email`)
        // 	.all(votersMiddleware.validateVoterExists)
        // 	.get(votersController.getVotersByEmail)
        // 	.delete(votersController.removeVoterByEmail);
        return this.app;
    }
}
exports.VoteRoutes = VoteRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL3ZvdGUucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5REFBeUM7QUFFekMseUVBQW9FO0FBQ3BFLHFGQUE0RDtBQUM1RCx5RkFBZ0U7QUFFaEUsd0ZBQStEO0FBQy9ELG9GQUEyRDtBQUUzRCxpSEFBdUY7QUFFdkYsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBZ0I7UUFDM0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNkLDBGQUEwRjtRQUMxRix5R0FBeUc7UUFDekcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxHQUFHO2FBQ04sS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNkLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxhQUFhLENBQUM7YUFDbkMsSUFBSSxDQUNKLHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQzdCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx5QkFBYyxDQUFDLDhCQUE4QixFQUM3Qyx5QkFBYyxDQUFDLHlCQUF5QixFQUN4Qyx5QkFBYyxDQUFDLElBQUksQ0FDbkIsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSwyQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCx3QkFBd0I7UUFFeEIsV0FBVztRQUNYLDhCQUE4QjtRQUM5Qiw4Q0FBOEM7UUFDOUMseUJBQXlCO1FBQ3pCLDJDQUEyQztRQUUzQyxXQUFXO1FBQ1gsNEJBQTRCO1FBQzVCLDhDQUE4QztRQUM5QywyQ0FBMkM7UUFDM0MsaURBQWlEO1FBRWpELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0NBQ0Q7QUF0Q0QsZ0NBc0NDIn0=