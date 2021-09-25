"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotersRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const voters_controller_1 = __importDefault(require("../controllers/voters.controller"));
const voters_middleware_1 = __importDefault(require("../middleware/voters.middleware"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
class VotersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'VotersRoutes');
    }
    configureRoutes() {
        this.app.route('/voters/slink').get(voters_controller_1.default.getS3link);
        this.app
            .route('/voters')
            .get(voters_controller_1.default.listVoters)
            .post(express_validator_1.body('email').isEmail(), body_validation_middleware_1.default.verifyBodyFieldsErrors, voters_middleware_1.default.validateSameEmailDoesntExist, voters_controller_1.default.createVoters);
        this.app.route('/voters/candidates').get(voters_controller_1.default.getCandidates);
        // this.app.param('voterId', votersMiddleware.extractVoterId);
        this.app
            .route('/voters/:voterID')
            .all(voters_middleware_1.default.validateVoterExists)
            .get(voters_controller_1.default.getVotersById)
            .delete(voters_controller_1.default.removeVoters);
        this.app
            .route('/voters/:email')
            .all(voters_middleware_1.default.validateVoterExists)
            .get(voters_controller_1.default.getVotersByEmail)
            .delete(voters_controller_1.default.removeVoterByEmail);
        return this.app;
    }
}
exports.VotersRoutes = VotersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZXJzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvdm90ZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLHlFQUFvRTtBQUNwRSx5RkFBZ0U7QUFDaEUsd0ZBQStEO0FBQy9ELGlIQUF1RjtBQUV2RixNQUFhLFlBQWEsU0FBUSx5Q0FBa0I7SUFDbkQsWUFBWSxHQUFnQjtRQUMzQixLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHO2FBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNoQixHQUFHLENBQUMsMkJBQWdCLENBQUMsVUFBVSxDQUFDO2FBQ2hDLElBQUksQ0FDSix3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUN2QixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsMkJBQWdCLENBQUMsNEJBQTRCLEVBQzdDLDJCQUFnQixDQUFDLFlBQVksQ0FDN0IsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpFLDhEQUE4RDtRQUU5RCxJQUFJLENBQUMsR0FBRzthQUNOLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUN6QixHQUFHLENBQUMsMkJBQWdCLENBQUMsbUJBQW1CLENBQUM7YUFDekMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLGFBQWEsQ0FBQzthQUNuQyxNQUFNLENBQUMsMkJBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEdBQUc7YUFDTixLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUFDLDJCQUFnQixDQUFDLG1CQUFtQixDQUFDO2FBQ3pDLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN0QyxNQUFNLENBQUMsMkJBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUNEO0FBbkNELG9DQW1DQyJ9