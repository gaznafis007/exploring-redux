const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data/products.json");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT | 5000;
app.use(cors());
app.use(express.json());

require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Server is running");
});
// app.get("/products", (req, res) => {
//   res.send(products);
// });

const uri = `mongodb+srv://moonDB:1bObUxu6ufyoxpzx@cluster0.1miyleu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// console.log(uri, "hello");
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    const productsCollection = client.db("moonDB").collection("products");

    app.get("/products", async (req, res) => {
      const query = {};
      const result = await productsCollection.find(query).toArray();
      res.send(result);
      // console.log(result);
    });
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.send(result);
    });
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
