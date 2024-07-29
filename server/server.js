import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

app.get("/", function (request, response) {
  response.json("Hello?");
});

// app.get("/images", function (request, response) {
//     response.json(images);
//   });

app.listen(8080, function () {
  console.log("Listening to port 8080");
});
