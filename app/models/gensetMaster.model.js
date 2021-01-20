const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userCore = require("./core");
const collection = "user";

const userSchema = mongoose.Schema({
  id: { type: Number,unique: true },
  userName : {type: String},
  userType:{type:String},
  status:{type:Boolean, default: true},
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

userCore.addIncrement(collection, userSchema, "id", 001, 1, true);

module.exports = {
  userSchema: mongoose.model("userModel", userSchema, "user"),
};
