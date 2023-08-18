import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
  },
  subject: {
    type: String,
    required: [false],
    unique: false,
  },
  department: {
    type: String,
    required: [false],
    unique: false,
  },
  name: { type: String, required: false, unique: false },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
