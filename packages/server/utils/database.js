import mongoose from "mongoose";

const createConnection = () => {
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

export { createConnection };
