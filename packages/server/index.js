import express from "express";

import cors from "cors";

import { createConnection } from "./utils/index.js";

import { Appointments, Restaurant, Tables } from "./routes/index.js";

// Database
createConnection();

// Server
const server = express();

// Middlewares
server.use(cors({ credentials: true, origin: true }));

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
