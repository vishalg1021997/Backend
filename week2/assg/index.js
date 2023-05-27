import express from "express";
import API from "./api.js";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

app.use(express.json());

app.get("/list/all", async (req, res) => {
  try {
    await API("breeds/list/all", "get").then((response) =>
      res.status(response.code).json(response.data)
    );
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/random", async (req, res) => {
  try {
    await API("breeds/image/random", "get").then((response) =>
      res.status(response.code).json(response.data)
    );
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed", async (req, res) => {
  try {
    await API(`breed/${req.params.breed}/images`, "get").then((response) =>
      res.status(response.code).json(response)
    );
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed/list", async (req, res) => {
  try {
    await API(`${req.params.breed}/list`, "get").then((response) =>
      res.status(response.code).json(response.data)
    );
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed/random", async (req, res) => {
  try {
    await API(`${req.params.breed}/images/random`, "get").then((response) =>
      res.status(response.code).json(response.data)
    );
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});
