const router = require("express").Router();
const shoeScrape = require("./shoes");

router.use("/shoe", shoeScrape);

module.exports = router;