const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.9qpxu0o.mongodb.net/techweavecollection?retryWrites=true&w=majority`);
      console.log("database is connected");
    } catch (error) {
      console.log("database is not connected");
      console.log(error.message);
    }
  };

  module.exports = connectDB