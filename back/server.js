const express = require("express");
const app = require("./app");



app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(9999, "0.0.0.0", () => {
  console.log("Example app listening on port 9999!");
});

