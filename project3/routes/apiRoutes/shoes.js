const router = require("express").Router();
const shoeController = require("../../controllers/ShoeController");

router.route("/scrape")
.get(shoeController.shoeScrape)

router.route("/saveShoe")
.post(shoeController.shoeToRoom)

router.route("/savedShoe")
.get(shoeController.getShoes)

module.exports = router;    