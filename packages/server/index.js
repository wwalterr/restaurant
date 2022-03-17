import server from "./application.js";

server.listen(process.env.PORT || 4000, (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log("Server listening");
  }
});
