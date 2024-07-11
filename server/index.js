import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ENV from "dotenv";
import { AccountRouter } from "./View/AccountRoute.js";
import { FormRoutes } from "./View/FormRoute.js";

ENV.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/User", AccountRouter);
app.use("/FormRoutes",FormRoutes)

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err.message));
