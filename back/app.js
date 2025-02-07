const express = require("express");
const cors = require("cors");
require("dotenv").config();
const countryRouter = require("./routers/countryRouter");
const detailsCountryRouter = require("./routers/countryDataRouter")

const app = express();

app.use(express.static("public"));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/country", countryRouter);
app.use("/api/country-data", detailsCountryRouter);

app.use((err, req, res, next) => {
  console.log("error in app.use", err);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
