const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URl);
      console.log("database is connected");
    } catch (error) {
      console.log("database is not connected");
      console.log(error.message);
      process.exit(1);
    }
  };

  module.exports = connectDB