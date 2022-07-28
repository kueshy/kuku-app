import mongoose from "mongoose";

const poultrySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    price: Number,
    prevPrice: Number,
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
    vaccinated: String,
    addedBy: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Poultry = mongoose.model("Poultry", poultrySchema);
export default Poultry;
