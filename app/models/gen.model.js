const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let gensetCore = require("./core");
const collection = "genset";

const gensetSchema = mongoose.Schema({
  id: { type: Number,unique: true },
  gensetName : {type: String},
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

gensetCore.addIncrement(collection, gensetSchema, "id", 001, 1, true);

module.exports = {
  gensetSchema: mongoose.model("gensetModel", gensetSchema, "genset"),
};
