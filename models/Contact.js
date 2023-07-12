import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 256,
    required: true,
  },
  email: {
    type: String,
    maxLength: 320,
    required: true,
  },
  phone: {
    type: String,
    maxLength: 15,
    required: true,
  },
  jobTitle: {
    type: String,
    maxLength: 256,
  },
  country: {
    type: String,
    maxLength: 256,
    required: true,
  },
  text: {
    type: String,
    maxLength: 256,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    required: true,
    default: () => Date.now(),
  },
});

export default mongoose.model("Contact", contactSchema);
