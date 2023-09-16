import { Db, MongoClient } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URL;
const options = {};

let client: MongoClient;
let cleintPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri!, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  cleintPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri!, options);
  cleintPromise = client.connect();
}

async function getDb(): Promise<Db> {
  const client = await cleintPromise;
  return client.db(process.env.DB_NAME);
}

export default getDb;
