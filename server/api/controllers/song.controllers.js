const express = require("express");
const Song = require("../../models/song");
const Country = require("../../models/country");
const app = express();
app.use(express.json());

const getData = async (id) => {
  let songs = id ? await Song.findById(id) : await Song.find({});
  console.log("songs", songs);

  return songs;
};

const getSongs = async (req, res) => {
  try {
    const songs = await getData();
    if (!songs[0]) return res.status(404).send("No Songs found");

    res.send(songs);
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e);
  }
};

const getSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await getData(id);
    if (!song) {
      return res.status(404).send("Song Not Found");
    }
    res.send(song);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
const postSong = async (req, res) => {
  try {
    const song = await new Song(req.body);
    await song.save();
    res.status(201).send(song);
  } catch (e) {
    if (e.message.includes("validation"))
      return res.status(400).send(e.message);
    console.log(e);
    res.status(500).send(e.message);
  }
};

const postCountry = async (req, res) => {
  try {
    const country = await new Country(req.body);
    await country.save();
    res.status(201).send(country);
  } catch (e) {
    if (e.message.includes("validation"))
      return res.status(400).send(e.message);
    console.log(e);
    res.status(500).send(e.message);
  }
};
const getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getData(id);
    if (!country) {
      return res.status(404).send("Country Not Found");
    }
    res.send(country);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { postSong, getSong, postCountry, getSongs, getCountry };
