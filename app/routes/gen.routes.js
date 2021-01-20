// const sampleCtrl = require("../controllers/sample.controllers");
var express = require("express");
var bodyParser = require("body-parser");
var sample = express.Router();
var middleware = require("./app.routes");
sample.use(bodyParser.json());
// Create a new Employer

// sample.route("/sample").post(function (req, res, next) {
//   sampleCtrl.sampleAdd(req, res, next);
// });

// sample.route("/sample").get(function (req, res, next) {
//   sampleCtrl.listOfBiomarker(req, res, next);
// });

module.exports = sample;
