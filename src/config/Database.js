const mongoose = require("mongoose");

const connection = () => {
   return mongoose.connect("mongodb://localhost:27017/roles").then(() => {
    console.log("Database connected");
  });
};

module.exports = connection;
