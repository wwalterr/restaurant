const express = require("express");

const server = express();

const port = process.env.PORT || 4000;

server.get("/", (request, response) => {
  response.status(200).json({ path: "/" });
});

server.listen(port, (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
