const mongoose = require("mongoose");
const dotenv = require("dotenv");
console.log("mongodb connected");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(`MongoDB connected : ${conn.connection.host}`);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
