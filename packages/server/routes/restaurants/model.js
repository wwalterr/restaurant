import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    restaurant: {
      type: String,
      immutable: true,
      required: true,
    },
    opening: {
      type: Date,
      required: true,
    },
    closing: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurants = mongoose.model("Restaurants", schema);

export default Restaurants;
