import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT as string,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

mongoose.connection.on('error', console.error.bind(console, "MongoDB connection error"))