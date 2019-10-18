const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const shoesSeed = [
  {
    name: " ",
    brand: " ",
    synopsis:
      " ",
    date: new Date(Date.now())
  },
];


  db.shoes
  .remove({})
  .then(() => db.shoes.collection.insertMany(shoesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });