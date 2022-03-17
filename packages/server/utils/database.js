import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    "mongodb://mongo:27017/restaurant",
    {
      auth: {
        authSource: "admin",
      },
      user: "root",
      pass: "root",
    },
    (error) => {
      if (error) console.log(error.message);
    }
  );
};

export { connect };
