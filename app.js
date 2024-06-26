const express = require("express");
const fs = require("fs");
const app = express();
const mockData1 = require("./scraped_data.json");
let mockData = "";
data = fs.readFile("scraped_data.json", "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", err);
    return;
  }
  mockData = data;
});
const port = 3030;
app.get("/", (req, res) => {
  const genre = req.query.genre;
  console.log(genre);

  if (genre) {
    const results = mockData1.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
    res.status(200).json({ payload: results });
  } else {
    const jsonData = JSON.parse(mockData);
    res.status(200).json({ payload: jsonData });
  }
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const item = mockData1.find((movie) => movie.movie_id == id);
  if (!item) {
    res.status(404).json({
      error: "Movie Not Found",
    });
  } else {
    res.status(200).json({ payload: item });
  }
});

app.listen(port);
