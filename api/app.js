import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Server is running!");
});
