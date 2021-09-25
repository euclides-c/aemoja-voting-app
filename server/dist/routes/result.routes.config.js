"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const result_controller_1 = __importDefault(require("../controllers/result.controller"));
class ResultRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ResultRoutes');
    }
    configureRoutes() {
        this.app.route('/result/:candidateName').get(result_controller_1.default.getResults);
        return this.app;
    }
}
exports.ResultRoutes = ResultRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvcmVzdWx0LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEseUVBQW9FO0FBQ3BFLHlGQUFnRTtBQUVoRSxNQUFhLFlBQWEsU0FBUSx5Q0FBa0I7SUFDbkQsWUFBWSxHQUFnQjtRQUMzQixLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLENBQUMsMkJBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRDtBQVZELG9DQVVDIn0=