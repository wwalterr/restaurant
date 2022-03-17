import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
});

const Appointments = mongoose.model("Appointments", schema);

export default Appointments;
