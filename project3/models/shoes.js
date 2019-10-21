const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoesSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true},
  image: {type: String}
  // year: { type: Date, default: Date.now }
});

const shoes = mongoose.model("shoes", shoesSchema);

module.exports = shoes;
