import mongoose from "mongoose";

const chickSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    price: Number,
    sect: {
      type: String,
      required: true,
    },
    totalCount: {
      type: Number,
      required: true,
    },
    image: String,
    age: String,
    addedBy: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Chick = mongoose.model("Chick", chickSchema);
export default Chick;
