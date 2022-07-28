import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// Routes
import PoultryRoute from "./routes/PoultryRoute.js";
import UserRoute from "./routes/UserRoute.js";
import UploadRoute from "./routes/UploadRoute.js";

// to serve images for the public
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDB connected and running to port ${process.env.PORT}`);
  });
});

// Routes usage
app.use("/api/v1/", PoultryRoute);
app.use("/api/v1/auth/", UserRoute);
app.use("/api/v1/upload", UploadRoute);
