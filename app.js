const express = require("express");
const fs = require("fs");
const app = express();
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
  const jsonData = JSON.parse(mockData);
  res.status(200).send({ payload: jsonData });
});

app.listen(port, () => {
  console.log("server is running on port 3030");
});
