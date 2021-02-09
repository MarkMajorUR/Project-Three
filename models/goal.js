const mongoose = require("mongoose");

const User = require("./user");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  // user_id: {type: String, required: false},
  title: { type: String, required: true },
  startdate: { type: Date, required: true },
  targetdate: { type: Date, required: true },
  reason: { type: String, required: false },
  date: { type: Date, default: Date.now },
  pass: { type: Number },
  fail: { type: Number }
});

const Goal = mongoose.model("Goal", goalSchema);


module.exports = Goal;
