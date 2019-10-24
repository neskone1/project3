const router = require("express").Router();
const shoeController = require("../../controllers/ShoeController");

router.route("/scrape")
.get(shoeController.shoeScrape)

 router.route("/db")
 .post()

module.exports = router;    