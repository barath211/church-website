import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { AccountRouter } from "./View/AccountRoute.js";
import { FormRoutes } from "./View/FormRoute.js";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/User", AccountRouter);
app.use("/FormRoutes", FormRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const __dirname = path.resolve();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "client", "build")));

// Serve the 'index.html' file for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
