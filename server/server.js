// Imports
require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const router = require("./api/routes/song.routes");

// const path = require("path");
// const { getReact } = require("./server/api/controllers/utils/utils");
// const cors = require("cors");
// const Song = require("./models/song");

// configure express server
const server = express();
const port = process.env.PORT || 5555;
// server.use(cors());

server.use(express.json());
server.use("/", router);
// server.use(express.static(getReact()));

// Listen on given port
server.listen(port, () => {
  console.log(`Server is up and listening on ${port}`);
});
