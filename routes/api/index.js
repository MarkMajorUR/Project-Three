const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users");

// Book routes
router.use("/goals", goalRoutes);
router.use("/users", userRoutes);


module.exports = router;
