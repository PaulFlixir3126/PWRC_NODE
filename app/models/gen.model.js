const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let cityCore = require("./core");
const collection = "city";

const citySchema = mongoose.Schema({
  id: { type: Number,unique: true },
  cityName : {type: String},
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

cityCore.addIncrement(collection, citySchema, "id", 001, 1, true);

module.exports = {
  citySchema: mongoose.model("cityModel", citySchema, "city"),
};
