import mongoose from "mongoose";

const MONGO_URI = "mongodb://spoiledwit:M0ELqJBym4ZkOML9@ac-obfsaij-shard-00-00.hezbpje.mongodb.net:27017,ac-obfsaij-shard-00-01.hezbpje.mongodb.net:27017,ac-obfsaij-shard-00-02.hezbpje.mongodb.net:27017/?ssl=true&replicaSet=atlas-a6xy1g-shard-0&authSource=admin&retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("Please add your MONGODB_URI to environment variables");
}

async function dbConnect() {
  if (mongoose.connection.readyState > 1) {
    console.log("already up");
    return;
  }
  return mongoose.connect(MONGO_URI, { useUnifiedTopology: true });
}

export default dbConnect;
