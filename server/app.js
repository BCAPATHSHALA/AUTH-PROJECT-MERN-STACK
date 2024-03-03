import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import ErrorMiddleware from "./middlewares/error.js";

config({
  path: "./config/config.env",
});
const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Importing & Using Routes
import user from "./routes/userRoutes.js";

app.use("/api/v1", user);

export default app;

// Dummy routes for testing API purpose
app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

// Custom Error middleware for all routes
app.use(ErrorMiddleware);
