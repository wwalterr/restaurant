import express from "express";

import cors from "cors";

import compression from "compression";

import mongoose from "mongoose";

import { Appointments, Restaurants, Tables } from "./routes/index.js";

// Database
mongoose
  .connect("mongodb://localhost:27017/manager")
  .then((value) => {
    console.info(`Database ${mongoose.STATES[mongoose.connection.readyState]}`);
  })
  .catch((error) => console.log(error.message));

// Server
const server = express();

server.disable("x-powered-by");

// Middlewares
server.use(cors({ credentials: true, origin: true }));

server.use(compression({ level: 6 }));

server.use(express.json());

// Endpoints
server.use("/appointments", Appointments);

server.use("/restaurants", Restaurants);

server.use("/tables", Tables);

export default server;
