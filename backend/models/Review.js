import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    weekStartDate: {
      type: Date,
      require: true,
    },
    review: { type: String, default: "" },
  },
  { timestamps: true }
);
export const Review = mongoose.model("Review", ReviewSchema);
