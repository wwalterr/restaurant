import mongoose from "mongoose";

const schema = new mongoose.Schema({
  table: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  client: String,
});

const Appointments = mongoose.model("Appointments", schema);

export default Appointments;
