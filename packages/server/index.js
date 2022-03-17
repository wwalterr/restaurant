import express from "express";

import { connect } from "./utils/database.js";

// Database
connect();

const server = express();

server.listen(process.env.PORT || 4000, (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log("Server listening");
  }
});
