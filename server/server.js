require("dotenv").config();
const express = require("express");
require("./db/mongoose");
// const path = require("path");
// const { getReact } = require("./server/api/controllers/utils/utils");
// const cors = require("cors");
const Song = require("./models/song")
const port = process.env.PORT || 5555;
const server = express();
const router = require("./api/routes/song.routes");
// server.use(cors());
server.use(express.json());
server.use("/", router);
// server.use(express.static(getReact()));
server.listen(port, () => {
  console.log(`Server is up and listening on ${port}`);
});