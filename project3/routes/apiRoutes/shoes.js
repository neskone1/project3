const router = require("express").Router();
const shoeController = require("../../controllers/shoeController");

router.route("/scrape")
.get(shoeController.shoeScrape);

module.exports = router;    