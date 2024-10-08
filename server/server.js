import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); // this line lets us use the "body" from the request

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const images = [
  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg",
  "https://www.sandals.co.uk/blog/content/images/2022/06/Header-_-1-Blue-Hole-Jamaica-1.jpg",
  "https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg",
];

app.get("/", function (request, response) {
  response.json("Hello?");
});

app.get("/images", function (request, response) {
  response.json(images);
});

// message get
app.get("/message", async function (request, response) {
  // get the existing messages from the database
  const result = await db.query(`SELECT * FROM travel`);
  const messages = result.rows;
  response.json(messages);
});

// post to message database
app.post("/message", async function (request, response) {
  const { username, message } = request.body;
  // retrieve the information from the form
  console.log("post route body", request.body);
  // console.log(request.body.username);
  // here we would add input to the database

  await db.query(`INSERT INTO travel (username, message) VALUES ($1, $2)`, [
    username,
    message,
  ]);
  response.json("Travel entry added!");
});

app.listen(8080, function () {
  console.log("Listening to port 8080");
});

// html review container
// fetch request
// append
