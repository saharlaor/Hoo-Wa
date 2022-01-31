const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URL;
mongoose.connect(dbURL, (err, client) => {
  if (err) console.log(err);
});
