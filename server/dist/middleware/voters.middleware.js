"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const voters_service_1 = __importDefault(require("../services/voters.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:voters-controller');
class VotersMiddleware {
    constructor() {
        // Here we need to use an arrow function to bind `this` correctly
        this.validatePatchEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                log('Validating email', req.body.email);
                this.validateSameEmailBelongToSameVoter(req, res, next);
            }
            else {
                next();
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const voter = yield voters_service_1.default.getVoterByEmail(req.body.email);
            if (voter) {
                res.status(400).send({ error: `User email already exists` });
            }
            else {
                next();
            }
        });
    }
    validateSameEmailBelongToSameVoter(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const voter = yield voters_service_1.default.getVoterByEmail(req.body.email);
            if (voter && voter._id === req.params.voterId) {
                next();
            }
            else {
                res.status(400).send({ error: `Invalid email` });
            }
        });
    }
    validateVoterExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const voter = yield voters_service_1.default.readById(req.params.voterId);
            if (voter) {
                next();
            }
            else {
                res.status(404).send({
                    error: `User ${req.params.voterId} not found`,
                });
            }
        });
    }
    extractVoterId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.voterId;
            next();
        });
    }
}
exports.default = new VotersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZXJzLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9taWRkbGV3YXJlL3ZvdGVycy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0ZBQXVEO0FBQ3ZELGtEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBYyxlQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxNQUFNLGdCQUFnQjtJQUF0QjtRQTJCQyxpRUFBaUU7UUFDakUsdUJBQWtCLEdBQUcsQ0FDcEIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQixFQUNqQixFQUFFO1lBQ0gsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbkIsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXhDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1A7UUFDRixDQUFDLENBQUEsQ0FBQztJQWlCSCxDQUFDO0lBeERNLDRCQUE0QixDQUNqQyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCOztZQUVsQixNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1A7UUFDRixDQUFDO0tBQUE7SUFFSyxrQ0FBa0MsQ0FDdkMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxLQUFLLEdBQUcsTUFBTSx3QkFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQzlDLElBQUksRUFBRSxDQUFDO2FBQ1A7aUJBQU07Z0JBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNqRDtRQUNGLENBQUM7S0FBQTtJQWlCSyxtQkFBbUIsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUN4RSxNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUM7YUFDUDtpQkFBTTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDcEIsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLFlBQVk7aUJBQzdDLENBQUMsQ0FBQzthQUNIO1FBQ0YsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ25FLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pDLElBQUksRUFBRSxDQUFDO1FBQ1IsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==