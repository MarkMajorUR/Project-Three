const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  // user_id: {type: String, required: false},
  caption: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);


module.exports = Testimonial;