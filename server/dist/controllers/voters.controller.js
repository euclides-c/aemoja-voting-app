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
const debug_1 = __importDefault(require("debug"));
const voters_service_1 = __importDefault(require("../services/voters.service"));
const shortid_1 = __importDefault(require("shortid"));
const log = debug_1.default('app:voters-controller');
class VotersController {
    // transform this into get all voters, use the get list
    listVoters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const voters = yield voters_service_1.default.list(100, 0);
            res.status(200).send(voters);
        });
    }
    // make this get voter working
    getVotersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const voters = yield voters_service_1.default.readById(req.body.id);
            res.status(200).send(voters);
        });
    }
    getVotersByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const voters = yield voters_service_1.default.getVoterByEmail(req.body.email);
            res.status(200).send(voters);
        });
    }
    getCandidates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidates = yield voters_service_1.default.listCandidates();
            res.status(200).send(candidates);
        });
    }
    getVotersToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const voters = yield voters_service_1.default.readById(req.body.token);
            res.status(200).send(voters);
        });
    }
    createVoters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //  Token for vote confirmation. To be sent by e-mail to voter
            const token = shortid_1.default.generate();
            // create the voter
            const voterId = yield voters_service_1.default.create(Object.assign({ token }, req.body));
            voters_service_1.default.sendEmail(req.body.email, token);
            res.status(201).send({ id: voterId });
        });
    }
    removeVoters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield voters_service_1.default.deleteById(req.body.id));
            res.status(204).send();
        });
    }
    removeVoterByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield voters_service_1.default.deleteByEmail(req.body.email));
            res.status(204).send();
        });
    }
    getS3link(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadURL = yield voters_service_1.default.getS3link();
            res.status(200).send(uploadURL);
        });
    }
}
exports.default = new VotersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZXJzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy92b3RlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QztBQUN6QyxnRkFBdUQ7QUFDdkQsc0RBQThCO0FBRTlCLE1BQU0sR0FBRyxHQUFjLGVBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sZ0JBQWdCO0lBQ3JCLHVEQUF1RDtJQUNqRCxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVELDhCQUE4QjtJQUN4QixhQUFhLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDakQsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDOUMsTUFBTSxVQUFVLEdBQUcsTUFBTSx3QkFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUNLLGNBQWMsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDL0MsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDN0MsOERBQThEO1lBQzlELE1BQU0sS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsbUJBQW1CO1lBRW5CLE1BQU0sT0FBTyxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxNQUFNLGlCQUFHLEtBQUssSUFBSyxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUM7WUFDbkUsd0JBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzdDLEdBQUcsQ0FBQyxNQUFNLHdCQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQVksRUFBRSxHQUFhOztZQUNuRCxHQUFHLENBQUMsTUFBTSx3QkFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7Q0FDRDtBQUVELGtCQUFlLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyJ9