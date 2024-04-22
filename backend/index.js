import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";
import session from "express-session";
import MongoStore from "connect-mongo";

import { connectDB } from "./config/index.js";
import { fileURLToPath } from "url";
import userRoutes from "./routes/user.js";
import reviewRoutes from "./routes/review.js";

// Variables
const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MiddleWares
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "/public/assets")));

// Authenttication
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  })
);

// Routes
app.use("/user", userRoutes);
app.use("/review", reviewRoutes);

// Database Config
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
