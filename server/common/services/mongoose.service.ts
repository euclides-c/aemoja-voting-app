import mongoose from "mongoose";
import debug, { IDebugger } from "debug";
import { ServerApiVersion } from "mongodb";

const log: IDebugger = debug("app:mongoose-service");

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    serverApi: ServerApiVersion.v1,
  };

  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    log("Attempting MongoDB connection (will retry if needed)");
    console.log(process.env.MONGO_URI);
    mongoose
      .connect(`${process.env.MONGO_URI}`, this.mongooseOptions)
      .then(() => {
        log("MongoDB is connected");
      })
      .catch((err) => {
        const retrySeconds = 5;
        log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}
export default new MongooseService();
