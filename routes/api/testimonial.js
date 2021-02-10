const router = require("express").Router();
const testimonialController = require("../../controllers/testimonialController");

// Matches with "/api/testimonial"
router.route("/")
  .get(testimonialController.findAll)
  .post(testimonialController.create);

// Matches with "/api/testimonial/:id"
router
  .route("/:id")
  .get(testimonialController.findById)
  .put(testimonialController.update)
  .delete(testimonialController.remove);

  module.exports = router;