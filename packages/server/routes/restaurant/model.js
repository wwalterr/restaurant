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

const Restaurant = mongoose.model("Restaurant", schema);

export default Restaurant;
