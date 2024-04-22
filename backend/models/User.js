import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  Location: String,
  Email: String,
  Phone: Number,
  picturePath: String,
  TechStack: [String],
  role: { type: String, default: "user" },
});
const User = mongoose.model("User", UserSchema);
export default User;
