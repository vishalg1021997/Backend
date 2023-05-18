const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

app.use(bodyParser.json());

app.get("/dogs", (req, res) => {
  try {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => response)
      .then((response) => res.status(200).json(response.data));
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/random", (req, res) => {
  try {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => response)
      .then((response) => res.status(200).json(response.data));
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed", (req, res) => {
  try {
    axios
      .get(`https://dog.ceo/api/breed/${req.params.breed}/images`)
      .then((response) => {
        return response;
      })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => res.status(400).json("Some Error"));
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed/list", (req, res) => {
  try {
    axios
      .get(`https://dog.ceo/api/breed/${req.params.breed}/list`)
      .then((response) => {
        return response;
      })
      .then((response) => res.status(200).json(response.data))
      .catch((err) => res.status(400).json("Some Error"));
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});

app.get("/dogs/breed/:breed/random", (req, res) => {
  try {
    axios
      .get(`https://dog.ceo/api/breed/${req.params.breed}/images/random`)
      .then((response) => {
        return response;
      })
      .then((response) => {
        return res.status(200).json(response.data);
      })
      .catch((err) => res.status(400).json("Some Error"));
  } catch (error) {
    res.status(400).json("Some ERROR");
  }
});
