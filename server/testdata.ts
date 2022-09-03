// require the necessary libraries
import { faker } from "@faker-js/faker";
import { MongoClient } from "mongodb";

async function seedDB() {
  // Connection URL
  const uri = "mongodb://localhost:27017/";

  const client: MongoClient = new MongoClient(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const collection = client.db("aemoja").collection("voter");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();

    // make a bunch of time series data
    const voters: object[] = [];

    for (let i = 0; i < 100; i++) {
      //  create an object of a voter
      // Push it into an array
      //  insert to DB

      let voter = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        universidade: faker.lorem.sentence(),
        bolsa: faker.lorem.word(),
        chegada: faker.date.past(),
        candidato: faker.lorem.word(),
        foto: faker.image.people(),
      };

      voters.push(voter);
    }
    collection.insertMany(voters);

    console.log("Database seeded! :)");
    client.close();
  } catch (err: any) {
    console.log(err.stack);
  }
}

seedDB();

export default seedDB;
