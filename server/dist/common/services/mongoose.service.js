"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:mongoose-service');
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        this.connectWithRetry = () => {
            log('Attempting MongoDB connection (will retry if needed)');
            mongoose_1.default
                .connect('mongodb+srv://aemojadb:aemoja@cluster0.6tv0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', this.mongooseOptions)
                .then(() => {
                log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGtEQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBYyxlQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVyRCxNQUFNLGVBQWU7SUFRcEI7UUFQUSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBRztZQUN6QixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLHdCQUF3QixFQUFFLElBQUk7U0FDOUIsQ0FBQztRQVVGLHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUN2QixHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUM1RCxrQkFBUTtpQkFDTixPQUFPLENBQ1Asc0dBQXNHLEVBQ3RHLElBQUksQ0FBQyxlQUFlLENBQ3BCO2lCQUNBLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNkLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxDQUNGLGdEQUFnRCxFQUFFLElBQUk7cUJBQ3BELEtBQUssVUFBVSxZQUFZLFlBQVksRUFDekMsR0FBRyxDQUNILENBQUM7Z0JBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUExQkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLGtCQUFRLENBQUM7SUFDakIsQ0FBQztDQXNCRDtBQUNELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==