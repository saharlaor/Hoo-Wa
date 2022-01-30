// Imports
require("dotenv").config();
require("./db/mongoose");
const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require("./api/routes/song.routes");

// Constants
const PUBLIC_PATH = path.join(__dirname, "../Client/build");
const port = process.env.PORT || 5555;

// const { getReact } = require("./server/api/controllers/utils/utils");
// const Song = require("./models/song");

// configure express server
const server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(PUBLIC_PATH));
server.use("/", router);

// Fallback
server.get("*", (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, "index.html"));
});

// Listen on given port
server.listen(port, () => {
  console.log(`Server is up and listening on ${port}`);
});
