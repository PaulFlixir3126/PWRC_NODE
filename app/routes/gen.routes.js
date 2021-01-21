// const gensetCtrl = require("../controllers/genset.controllers");
var express = require("express");
var bodyParser = require("body-parser");
var genset = express.Router();
var middleware = require("./app.routes");
genset.use(bodyParser.json());
// Create a new Employer

genset.route("/socket").post(function (req, res, next) {
  gensetCtrl.gensetAdd(req, res, next);
});

// genset.route("/genset").get(function (req, res, next) {
//   gensetCtrl.listOfBiomarker(req, res, next);
// });

module.exports = genset;
