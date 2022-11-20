import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res, next) => {
  console.log("hey my first web server");
  res.send("hey hey ");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server running at http://localhost:${PORT}`);
});
