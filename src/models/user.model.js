import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    phone: String,
  },
  { timestamps: true }
);

// indexes (single place)
userSchema.index({ name: 1 });

const User = mongoose.model("User", userSchema);
export default User;
