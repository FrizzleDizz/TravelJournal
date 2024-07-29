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

const images = [
  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg",
  "https://www.sandals.co.uk/blog/content/images/2022/06/Header-_-1-Blue-Hole-Jamaica-1.jpg",
  "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1124332706v2.jpggit",
];

app.listen(8080, function () {
  console.log("Listening to port 8080");
});
