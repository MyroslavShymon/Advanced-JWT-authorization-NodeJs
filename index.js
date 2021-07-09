require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error.middleware");

const PORT = process.env.PORT || 3225;
const app = new express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("process.env.DB_URL", process.env.DB_URL);
    app.listen(PORT, () => console.log("Server succes start at port = ", PORT));
  } catch (error) {
    console.log("Start error: ", error);
  }
};
start();
