require("dotenv").config({path:__dirname + "/.env"});
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connect");

const HomelayoutRouter = require("./routes/homepage-layout");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/homelayout", HomelayoutRouter);

const start = async () => {
      try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT : ${PORT}`);
        });

      }catch(err){
       console.log(err);
      }
}

start();


