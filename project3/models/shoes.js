const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoesSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true},
  image: {type: String}
});

const shoes = mongoose.model("shoes", shoesSchema);

module.exports = shoes;
