import mongoose from "mongoose";

const schema = new mongoose.Schema({
  restaurant: {
    type: String,
    immutable: true,
    required: true,
  },
  table: {
    type: Number,
    immutable: true,
    required: true,
  },
  seats: {
    type: Number,
    default: 1,
    min: 1,
  },
});

const Tables = mongoose.model("Tables", schema);

export default Tables;
