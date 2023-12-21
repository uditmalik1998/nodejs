const mongoose = require("mongoose");

const connectDB = (URL) => {
      return mongoose.connect(URL)
};

module.exports = connectDB;

// lsof -i tcp:5000
// kill -9 5805