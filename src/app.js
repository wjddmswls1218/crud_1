import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import connect from "../db";
import postRouter from "./routers/postRouter";
dotenv.config();

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(helmet());
connect();

app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} Server Start With MONGODB`);
});
