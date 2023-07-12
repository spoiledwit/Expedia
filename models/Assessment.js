import mongoose from "mongoose";
const assessmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 256,
  },
  email: {
    type: String,
    required: true,
    maxLength: 320,
  },
  phone: {
    type: String,
    required: true,
    maxLength: 16,
  },
  jobTitle: {
    type: String,
    required: true,
    maxLength: 256,
  },
  country: {
    type: String,
    required: true,
    maxLength: 256,
  },
  education: {
    type: String,
    maxLength: 256,
  },
  visaType: {
    type: String,
    required: true,
    maxLength: 256,
  },
  createdAt: {
    type: Date,
    immutable: true,
    required: true,
    default: () => Date.now(),
  },
});

export default mongoose.model("Assessment", assessmentSchema);
