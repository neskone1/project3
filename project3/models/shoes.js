const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoesSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  synopsis: String,
  year: { type: Date, default: Date.now }
});

const shoes = mongoose.model("shoes", shoesSchema);

module.exports = shoes;
