const router = require("express").Router();
const bookRoutes = require("./goals");

// Book routes
router.use("/goals", bookRoutes);

module.exports = router;
