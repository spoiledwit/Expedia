import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    maxLength: 256,
  },
  email: {
    type: String,
    maxLength: 256,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    maxLength: 256,
    required: true,
  },
  role: {
    type: String,
    maxLength: 256,
    default: "user",
    enum: ["user", "admin"],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
