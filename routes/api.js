// Dependencies
var dates = require("../functions/dates")
var express = require("express");
var router = express.Router();

// Routes
router
  .get("/:date", function(req, res){
    res.send(dates(req.params.date));
  })
  .get("/", function(req, res){
    res.sendFile("index.html", { root: "./public" });
  });


// Return router
module.exports = router;