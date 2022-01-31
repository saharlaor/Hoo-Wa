const express = require("express");
const { postSong,getSong,getSongs} = require("../controllers/song.controllers");
const songRouter = express.Router();

songRouter.get("/country")
songRouter.get("/country/songs", getSongs)
songRouter.post("/songs", postSong)

songRouter.get("/country/song/:id",getSong)
module.exports = songRouter