import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    client: {
      type: String,
      immutable: true,
      required: true,
    },
    restaurant: {
      type: String,
      immutable: true,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

const Appointments = mongoose.model("Appointments", schema);

export default Appointments;
