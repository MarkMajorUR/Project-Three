const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  // user_id: {type: String, required: false},
  caption: { type: String, required: true },
  img:{ data: Buffer, contentType: String},
  date: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model("Timonial", TestimonialSchema);


module.exports = Testimonial;