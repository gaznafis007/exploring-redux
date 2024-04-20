const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data/products.json");
const port = process.env.PORT | 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
