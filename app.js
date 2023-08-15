import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const API_URL = "http://api.weatherstack.com/current";
const apiKey = process.env.API_KEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/get-city", async (req, res) => {
  const parameter = {
    access_key: `${apiKey}`,
    query: req.body.city,
  };

  try {
    const result = await axios.get(API_URL, { params: parameter });
    res.render("index.ejs", {
      cityName: JSON.stringify(result.data.request.query),
      temperature: JSON.stringify(result.data.current.temperature),
    });
  } catch (error) {
    res.render("index.ejs", { cityName: JSON.stringify(error.response) });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
