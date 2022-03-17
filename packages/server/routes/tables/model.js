import mongoose from "mongoose";

const schema = new mongoose.Schema({
  identifier: {
    type: Number,
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
