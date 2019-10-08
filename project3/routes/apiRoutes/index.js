const router = require("express").Router();
const shoeRoutes = require("./shoes");

// Book routes
router.use("/shoes", shoeRoutes);

module.exports = router;
