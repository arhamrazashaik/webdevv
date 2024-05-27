const mongoose = require("mongoose");
require("colors");

//connectDb function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

//export

module.exports = connectDb;

