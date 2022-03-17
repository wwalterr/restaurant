import express from "express";

import cors from "cors";

import compression from "compression";

import mongoose from "mongoose";

import { Appointments, Restaurant, Tables } from "./routes/index.js";

// Database
const connectionStatus = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
  4: "invalid credentials",
};

try {
  await mongoose.connect("mongodb://localhost:27017/restaurant");

  console.log(`Database ${connectionStatus[mongoose.connection.readyState]}`);
} catch (error) {
  console.log(error.message);
}

// Server
const server = express();

server.disable("x-powered-by");

// Middlewares
server.use(cors({ credentials: true, origin: true }));

server.use(compression());

server.use(express.json());

// Endpoints
server.use("/appointments", Appointments);

server.use("/restaurant", Restaurant);

server.use("/tables", Tables);

server.listen(process.env.PORT || 4000, (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log("Server listening");
  }
});
