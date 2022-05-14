import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cors from "cors";

import publicRoutes from "./routes/public";
import apiRoutes from "./routes/api";
import adminRoutes from "./routes/admin";
import apiMiddleware from "./middleware/apiAuth";
import adminMiddleware from "./middleware/adminAuth";
import errorHandler from "./middleware/errorHandler";

dotenv.config();
require("./config/sequelize");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use("/pub", publicRoutes);
app.use("/api", apiMiddleware, apiRoutes);
app.use("/api/admin", apiMiddleware, adminMiddleware, adminRoutes);
app.use(errorHandler);

module.exports = app;
