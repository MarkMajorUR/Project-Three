const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users");
const testimonialRoutes = require("./testimonial");

// routes
router.use("/goals", goalRoutes);
router.use("/users", userRoutes);
router.use("/testimonial", testimonialRoutes);


module.exports = router;
