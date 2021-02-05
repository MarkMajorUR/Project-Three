const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   user: {type: String, required: true},
//   password: {type: String, required: true},
//   date: { type: Date, default: Date.now }
// });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;
