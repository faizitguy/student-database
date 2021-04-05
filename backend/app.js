const express = require("express");
const Student = require("./models/students");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/students");
const { body, validationResult } = require("express-validator");

env.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/students", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running on port 5000");
});
