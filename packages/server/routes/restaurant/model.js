import mongoose from "mongoose";

const schema = new mongoose.Schema({
  opening: {
    type: Date,
    required: true,
  },
  closing: {
    type: Date,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", schema);

export default Restaurant;
