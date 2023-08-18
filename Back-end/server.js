import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./Database/connect.js";
import router from "./Router/route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.use("/api", router);

const port = 8000;

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server connected to ${port}`);
      });
    } catch (error) {
      console.log(`cannot be connected to ${port}`);
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
