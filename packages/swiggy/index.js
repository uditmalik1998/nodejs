require("dotenv").config({ path: __dirname + "/.env" });
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connect");

const HomelayoutRouter = require("./routes/restaurant-layout");
const BannerOfferRouter = require("./routes/offers-layout");
const UserRouter = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/restaurant", HomelayoutRouter);
app.use("/api/v1/offer", BannerOfferRouter);
app.use("/api/v1/user",UserRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT : ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
