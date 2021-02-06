const router = require("express").Router();
const testimonialController = require("../../controllers/testimonialController");


router.route("/")
  .get(testimonialController.findAll)
  .post(testimonialController.create);

router
  .route("/:id")
  .get(testimonialController.findById)
  .put(testimonialController.update)
  .delete(testimonialController.remove);

  module.exports = router;