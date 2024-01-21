import mongoose from "mongoose";

const MONGO_URI =
  // "mongodb+srv://spoiledwit:M0ELqJBym4ZkOML9@cluster0.hezbpje.mongodb.net/?retryWrites=true";
  process.env.MONGODB_URI;
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
